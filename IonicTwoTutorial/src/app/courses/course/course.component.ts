import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CourseService } from '../shared/course.service';

@Component({
    selector: 'course',
    templateUrl: 'course.html' })

export class Course {

    public course: Course;
    public courseService: CourseService;
    public navCtrl: NavController;

    constructor(courseService: CourseService, navCtrl: NavController) {
        this.courseService = courseService;
        this.course = this.courseService.getCourses();
        this.navCtrl = navCtrl;
    }

    public goToCourse(): void {
        this.navCtrl.push(Course);
    }
}