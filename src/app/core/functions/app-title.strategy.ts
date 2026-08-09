import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { APP_CONFIG } from '@core/functions/config.token';

@Injectable()
export class AppTitleStrategy extends TitleStrategy {

    private readonly title = inject(Title);
    private readonly appConfig = inject(APP_CONFIG);

    updateTitle(snapshot: RouterStateSnapshot): void {
        const pageTitle = this.buildTitle(snapshot) || this.title.getTitle();
        this.title.setTitle(`${this.appConfig.appName} | ${pageTitle}`);
    }
}