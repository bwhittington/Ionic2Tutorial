import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CourseService } from './shared/course.service';

@Component({
    selector: 'page-courses',
    templateUrl: 'courses.html',
    providers: [CourseService] })

export class Courses {

    public navCtrl: NavController;

    constructor(navCtrl: NavController) {
        this.navCtrl = navCtrl;
    }
}