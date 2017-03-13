import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from './home/home.module';

@Component({ templateUrl: 'app.html' })

export class MyApp {
    public rootPage: HomePage;

    constructor(platform: Platform) {
        platform.ready().then(() => {
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }
}
