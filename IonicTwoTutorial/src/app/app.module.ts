import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomeModule } from './home/home.module';
import { Courses } from './courses/courses.module';
import { CourseList } from './courses/course-list/course-list.component';
import { Course } from './courses/course/course.component';

@NgModule({
    declarations: [MyApp, HomeModule, Courses, CourseList, Course ],
    imports: [IonicModule.forRoot(MyApp)],
    bootstrap: [IonicApp],
    entryComponents: [MyApp, HomeModule, Courses, CourseList, Course ],
    providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]})
export class AppModule { }
