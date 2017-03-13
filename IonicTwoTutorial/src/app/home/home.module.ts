import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Courses } from '../courses/courses.module';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'})

export class HomePage {

    private navCtrl: NavController;

    constructor(navCtrl: NavController) {
        this.navCtrl = navCtrl;
    }

    public goToCourses(): void {
        this.navCtrl.push(Courses);
    }
}