import { InjectionToken } from '@angular/core';
import { environment } from '@environments/environment';

export interface appConfig {
    apiUrl: string;
    appName: string;
}

export const APP_CONFIG = new InjectionToken<appConfig>('app.config', {
    providedIn: 'root',
    factory: () => ({
        apiUrl: environment.API_URL,
        appName: environment.APP_NAME
    })
});