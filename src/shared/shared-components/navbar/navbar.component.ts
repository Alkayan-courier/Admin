import { Component, OnInit, ElementRef } from '@angular/core';
import { LOOCKUPS_ROUTES, ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { AuthorizeService } from '../../../auth/authorize.service';
import { LanguageService } from '../../../shared/services/language.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    private listTitles: any[];
    public loggedInName: string;
    location: Location;
    mobile_menu_visible: any = 0;
    private toggleButton: any;
    private sidebarVisible: boolean;
    public isLoggedIn = false;
    constructor(
        location: Location,
        private element: ElementRef,
        private router: Router,
        private authService: AuthorizeService,
        public languageService: LanguageService
    ) {
        this.location = location;
        this.sidebarVisible = false;
    }

    ngOnInit() {
        this.isLoggedIn = this.authService.isLoggedIn();
        if (this.isLoggedIn) {
            this.loggedInName = this.authService.getLoggedInUserName();
            this.listTitles = ROUTES.concat(...LOOCKUPS_ROUTES).filter(listTitle => listTitle);
            const navbar: HTMLElement = this.element.nativeElement;
            this.toggleButton = document.getElementsByClassName('navbar-toggler')[0];
            this.router.events.subscribe((event) => {
                this.sidebarClose();
                var $layer: any = document.getElementsByClassName('close-layer')[0];
                if ($layer) {
                    $layer.remove();
                    this.mobile_menu_visible = 0;
                }
            });
        }

    }
  
    public changeLanguage(lang: string) {
        this.languageService.setLanguage(lang);

       
        /* if(this.router.url.includes('-list'))
        {
            location.reload();
        }     */
    }
    public logout() {
        this.authService.logout();
    }
    sidebarOpen() {
     
    };
    sidebarClose() {
   
    };
    sidebarToggle() {  
      $("#mainBar").toggle('slow');
    };

    getTitle() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }

        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }
}
