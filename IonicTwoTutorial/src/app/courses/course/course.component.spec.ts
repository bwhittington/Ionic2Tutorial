import { ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { } from 'jasmine';

import { TestUtils } from '../../../test';
import { Course } from './course.component';
import { CourseModel } from '../shared/course.model';
import { CourseService } from '../shared/course.service';
import { NavParamsMock } from '../../../mocks';

let fixture: ComponentFixture<Course> = null;
let instance: any = null;
let de: DebugElement;
let el: HTMLElement;

describe('Component: Course', () => {

    beforeEach(async(() => TestUtils.beforeEachCompiler([Course]).then(compiled => {
        fixture = compiled.fixture;
        instance = compiled.instance;
        fixture.detectChanges();
    })));

    afterEach(() => {
        fixture.destroy();
    });

    it('is created', () => {
        expect(instance).toBeTruthy();
    });

    it('displays a detailed view with heading including the course name', () => {
        let courseService: CourseService;
        let firstCourse: CourseModel;

        courseService = fixture.debugElement.injector.get(CourseService);
        firstCourse = courseService.getCourse(1);

        fixture.detectChanges();

        de = fixture.debugElement.query(By.css('ion-card ion-card-header'));
        el = de.nativeElement;

        expect(el.textContent).toContain(firstCourse.name);

    });

    it('displays a detailed view with content including the course syllabus', () => {
        let courseService: CourseService;
        let firstCourse: any;

        courseService = fixture.debugElement.injector.get(CourseService);
        firstCourse = courseService.getCourse(1);

        fixture.detectChanges();

        de = fixture.debugElement.query(By.css('ion-card ion-card-content'));
        el = de.nativeElement;

        expect(el.textContent).toContain(firstCourse.syllabus);

    });
});