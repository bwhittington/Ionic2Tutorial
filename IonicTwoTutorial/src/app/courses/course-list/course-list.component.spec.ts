import { ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { } from 'jasmine';

import { TestUtils } from '../../../test';
import { CourseList } from './course-list.component';
import { CourseService } from '../shared/course.service';

let fixture: ComponentFixture<CourseList> = null;
let instance: any = null;
let de: HTMLElement;
let el: HTMLElement;

describe('Component: Course List', () => {

    beforeEach(async(() => TestUtils.beforeEachCompiler([CourseList]).then(compiled => {
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

    it('displays courses by title', () => {
        let courseService: CourseService;
        let firstCourse: any;

        fixture.debugElement.injector.get(CourseService);

        fixture.detectChanges();

        el = fixture.nativeElement;

        expect(el.querySelector('button').innerHTML).toBe('C#/.NET');
    });
});