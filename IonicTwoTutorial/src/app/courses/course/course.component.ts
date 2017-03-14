import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CourseService } from '../shared/course.service';

@Component({
    selector: 'course',
    templateUrl: 'course.html' })

export class Course {

    public course: Course;
    public courseService: CourseService;
    public navCtrl: NavController;
    public navParams: NavParams;

    constructor(courseService: CourseService, navCtrl: NavController, navParams: NavParams) {
        this.courseService = courseService;
        var id = this.navParams.get('id');
        this.course = this.courseService.getCourse(id);
    }
}