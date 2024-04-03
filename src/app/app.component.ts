import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../shared/services/language.service';
import { AuthorizeService } from '../auth/authorize.service';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public currentLanguage = '';
  constructor(private translate: TranslateService, public languageService: LanguageService) {
    this.translate.addLangs(['ar', 'en'])
    var localLanguage = localStorage.getItem('language');
    if (localLanguage) {
      this.languageService.setLanguage(localLanguage);
    }
    else {
      this.languageService.setLanguage('en');
    }
   
  }
  ngOnInit(): void {
    
    //console.log(this.authService.getLoggedInUsersRole())
  }

}
