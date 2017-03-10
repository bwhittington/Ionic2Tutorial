import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CourseList } from '/course-list/course-list.component'
import { CourseService } from './shared/course.service'

@Component({
    selector: 'page-courses',
    templateUrl: 'courses.html',
    providers: [CourseService]
})

export class Courses {

    constructor(public navCtrl: NavController) {
        this.navCtrl = navCtrl;
    }

}