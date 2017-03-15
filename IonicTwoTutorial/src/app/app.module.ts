import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomeModule } from './home/home.module';
import { CoursesModule } from './courses/courses.module';

@NgModule({
    declarations: [ MyApp, HomeModule ],
    imports: [IonicModule.forRoot(MyApp), CoursesModule],
    bootstrap: [IonicApp],
    entryComponents: [ MyApp, HomeModule ],
    providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]})
export class AppModule { }
