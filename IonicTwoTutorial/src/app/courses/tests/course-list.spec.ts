import { ComponentFixture, async } from '@angular/core/testing';
import { } from 'jasmine';

import { TestUtils } from './test';
import { CourseList } from '../course-list/course-list.component';

let fixture: ComponentFixture<CourseList> = null;
let instance: any = null;

describe('Component: CourseList', () => {

    beforeEach(async(() => TestUtils.beforeEachCompiler([CourseList]).then(compiled => {
        fixture = compiled.fixture;
        instance = compiled.instance;
    })));

    it('should create the hello ionic page', async(() => {
        expect(instance).toBeTruthy();
    }));
});