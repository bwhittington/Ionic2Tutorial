import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CourseService } from '../shared/course.service';
import { Course } from './course/course.component';

@Component({
    selector: 'course-list',
    templateUrl: 'course-list.html' })

export class CourseList {

    public courses: Array<Object>;
    private courseService: CourseService;
    private navCtrl: NavController;

    constructor(courseService: CourseService, ) {
        this.courseService = courseService;
        this.courses = this.courseService.getCourses();
    }

    public goToCourse(): void {
        this.navCtrl.push(Course);
    }
}