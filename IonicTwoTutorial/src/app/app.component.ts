import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomeModule } from './home/home.module';

@Component({ templateUrl: 'app.html' })

export class MyApp {
    public rootPage = HomeModule;
    private platform: Platform;

    constructor(platform: Platform) {
        this.platform = platform;
        platform.ready().then(() => {
            StatusBar.styleDefault();
            Splashscreen.hide(); });
    }
}
