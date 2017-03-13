import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from './home/home.module';
import { Courses } from './courses/courses.module';
import { CourseList } from './courses/course-list/course-list.component';

@NgModule({
    declarations:  [MyApp, HomePage, Courses, CourseList ],
    imports: [IonicModule.forRoot(MyApp)],
    bootstrap: [IonicApp],
    entryComponents: [ MyApp, HomePage, Courses, CourseList],
    providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]})
export class AppModule { }
