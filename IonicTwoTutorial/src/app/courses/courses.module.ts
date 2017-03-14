import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { Courses } from './courses.component';
import { CourseList } from './course-list/course-list.component';
import { Course } from './course/course.component';
import { CourseService } from './shared/course.service'

@NgModule({
    imports: [
        IonicModule.forRoot(Courses)
    ],
    declarations: [
        Courses,
        CourseList,
        Course
    ],
    bootstrap: [IonicApp],
    exports: [
        Courses,
        CourseList,
        Course
    ],
    providers: [CourseService, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})

export class CoursesModule { }