import { ComponentFixture, TestBed, inject, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { } from 'jasmine';
import { App, Config, Form, IonicModule, Keyboard, DomController, MenuController, NavController, NavParams, GestureController, Platform } from 'ionic-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConfigMock, PlatformMock, NavParamsMock } from '../../../mocks';
import { Course } from './course.component';
import { CourseModel } from '../shared/course.model';
import { CourseService } from '../shared/course.service';

let instance: Course;
let fixture: ComponentFixture<Course>;
let de: DebugElement;
let el: HTMLElement;

describe('Component: Course', () => {

    beforeEach(async(() =>
    {
        NavParamsMock.setParams('id', 1);
        TestBed.configureTestingModule({
            declarations: [Course],
            providers: [
                App, Form, Keyboard, DomController, MenuController, NavController, GestureController,
                { provide: Platform, useClass: PlatformMock },
                { provide: Config, useClass: ConfigMock },
                { provide: NavParams, useClass: NavParamsMock },
                CourseService],
            imports: [
                FormsModule,
                IonicModule,
                ReactiveFormsModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Course);
                instance = fixture.componentInstance;
        });

    afterEach(() => {
        fixture.destroy();
    });

    it('is created', () => {
        expect(instance).toBeTruthy();
    });

    it('displays a detailed view with heading including the course name', () => {
        let courseService: CourseService;
        let courseModel: CourseModel;

        courseService = fixture.debugElement.injector.get(CourseService);
   
        fixture.detectChanges();

        courseModel = instance.courseModel;
        de = fixture.debugElement.query(By.css('ion-card-header'));
        el = de.nativeElement;

        expect(el.textContent).toContain(courseModel.name);

    });

    it('displays a detailed view with content including the course syllabus', () => {
        let courseService: CourseService;
        let courseModel: CourseModel;

        courseService = fixture.debugElement.injector.get(CourseService);

        fixture.detectChanges();

        courseModel = instance.courseModel;
        de = fixture.debugElement.query(By.css('ion-card-content'));
        el = de.nativeElement;

        expect(el.textContent).toContain(courseModel.syllabus);

    });
});