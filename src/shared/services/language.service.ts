import { Injectable } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {

    constructor(private translate: TranslateService, private adapter: DateAdapter<Date>) { }
    public getCurrentLanguage(): string {
        return this.translate.currentLang;
    }
    public setLanguage(lang: string): void {
        this.translate.use(lang);
        this.translate.setDefaultLang(lang);
        localStorage.setItem('language', lang);
        this.adapter.setLocale(lang);
    }
}