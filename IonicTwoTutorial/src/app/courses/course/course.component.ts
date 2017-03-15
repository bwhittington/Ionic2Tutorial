import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CourseService } from '../shared/course.service';
import { CourseModel } from '../shared/course.model';

@Component({
    selector: 'course',
    templateUrl: 'course.html'
})

export class Course {

    @Input() courseModel: CourseModel;
    public courseService: CourseService;
    public navCtrl: NavController;
    public navParams: NavParams;
    private id: number;

    constructor(navCtrl: NavController, navParams: NavParams, courseService: CourseService) {
        this.courseService = courseService;
        this.navParams = navParams;

        this.id = this.navParams.get('id');
        this.courseModel = this.courseService.getCourse(this.id);
    }
}