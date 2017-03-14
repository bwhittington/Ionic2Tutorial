import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomeModule } from './home/home.module';

@Component({ templateUrl: 'app.html' })

export class MyApp {
    rootPage = HomeModule;

    constructor(platform: Platform) {
        platform.ready().then(() => {
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }
}
