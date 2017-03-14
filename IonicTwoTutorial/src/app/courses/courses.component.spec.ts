import { ComponentFixture, async } from '@angular/core/testing';
import { } from 'jasmine';

import { TestUtils } from '../../test';
import { Courses } from './courses.component';
import { CourseList } from '././course-list/course-list.component';

let fixture: ComponentFixture<Courses> = null;
let instance: any = null;

describe('Component: Courses', () => {

    beforeEach(async(() => TestUtils.beforeEachCompiler([Courses, CourseList]).then(compiled => {
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
});