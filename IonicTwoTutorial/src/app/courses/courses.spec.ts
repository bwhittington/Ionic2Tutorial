import { ComponentFixture, async } from '@angular/core/testing';

import { TestUtils } from '../../test';
import { Courses } from './courses.module';

let fixture: ComponentFixture<Courses> = null;
let instance: any = null;

describe('Component: Courses', () => {

    beforeEach(async(() => TestUtils.beforeEachCompiler([Courses]).then(compiled => {
        fixture = compiled.fixture;
        instance = compiled.instance;
    })));

    it('should create the courses page', async(() => {
        expect(instance).toBeTruthy();
    }));
});