import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../environments/environment';
import decode from 'jwt-decode';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Controllers } from '../shared/global-variables/api-config';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class AuthorizeService {

    public isRefreshTokenCompleted = new BehaviorSubject<boolean>(null);
    private readonly JWT_TOKEN = 'accessToken';
    private readonly REFRESH_TOKEN = 'refreshToken';

    constructor(public jwtHelper: JwtHelperService, private router: Router, private http: HttpClient) {
    }

    refreshToken() {
        return this.http.post<any>(`${environment.apiPreLink + Controllers.Auth}RefreshToken`, {
            'accessToken': this.getJwtToken(),
            'refreshToken': this.getRefreshToken()
        }).pipe(tap((tokens: any) => {
            this.storeJwtToken(tokens.accessToken, tokens.refreshToken);
        }));
    }
    private getRefreshToken() {
        return localStorage.getItem(this.REFRESH_TOKEN);
    }
    private storeJwtToken(jwt: string, refreshToken: string) {
        localStorage.setItem(this.JWT_TOKEN, jwt);
        localStorage.setItem(this.REFRESH_TOKEN, refreshToken);
    }
    public async isAuthenticated() {
        const token = localStorage.getItem(environment.token);

        // Check whether the token is expired and return
        // true or false
        if (token) {

            return !this.jwtHelper.isTokenExpired(token);
        }
        const isRefreshSuccess = await this.tryRefreshingTokens(token);
        if (!isRefreshSuccess) {
            this.router.navigate(["login"]);
        }
        return isRefreshSuccess;
    }
    public isLoggedIn() {
        const token = localStorage.getItem(environment.token);
        if (token) {
            return true;
        }
        else {
            return false;
        }
    }
    public setToken(token: string, refreshToken: string) {
        localStorage.setItem(environment.token, token);
        localStorage.setItem('refreshToken', refreshToken);
    }
    getJwtToken() {
        return localStorage.getItem(this.JWT_TOKEN);
    }
    public logout() {
        localStorage.removeItem(environment.token);
        localStorage.removeItem("refreshToken");
        this.router.navigate(['/auth/login']);
    }
    public getLoggedInUsersRole() {
        const token = localStorage.getItem(environment.token);
        var roles;
        if (token) {
            var tokenPayload = decode(token);
        }
        else {
            this.logout();
        }

        if (Array.isArray((tokenPayload as any)[environment.roleClaim])) {
            roles = (tokenPayload as any)[environment.roleClaim];
        }
        else {
            roles = Array((tokenPayload as any)[environment.roleClaim]);
        }

        return roles;
    }

    get loggedInUser(): string {
        const token = localStorage.getItem(environment.token);
        if (token && !this.jwtHelper.isTokenExpired(token)) {
            return token;
        }
        return null;
    }

    public getLoggedInUserName(): string {
        const token = localStorage.getItem(environment.token);
        const decoded = decode(token)
        return decoded[environment.userName];
    }
    public tryRefreshingTokens(token: string): boolean {
        // Try refreshing tokens using refresh token
        const refreshToken: string = localStorage.getItem("refreshToken");
        console.log(refreshToken);

        if (!token || !refreshToken) {
            return false;
        }
        const credentials = JSON.stringify({ accessToken: token, refreshToken: refreshToken });
        let isRefreshSuccess: boolean;
        try {

            this.http.post(`${environment.apiPreLink + Controllers.Auth}RefreshToken`, credentials, {
                headers: new HttpHeaders({
                    "Content-Type": "application/json"
                }),
                observe: 'response'
            }).subscribe(response => {
                console.log(response);

                const newToken = (<any>response).body.accessToken;
                const newRefreshToken = (<any>response).body.refreshToken;
                localStorage.setItem("accessToken", newToken);
                localStorage.setItem("refreshToken", newRefreshToken);
                isRefreshSuccess = true;
            });

        }
        catch (ex) {
            isRefreshSuccess = false;
        }
        return isRefreshSuccess;
    }
}
