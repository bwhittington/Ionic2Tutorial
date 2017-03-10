import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CourseService } from '../shared/course.service'



@Component({
    selector: 'course-list',
    templateUrl: 'course-list.html'
})

export class CourseList {

    courses: Array<Object>;

    constructor(private courseService: CourseService ) {
        this.courseService = courseService;
        this.courses = this.courseService.getCourses();
    }

}