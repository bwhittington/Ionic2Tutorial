import { async } from '@angular/core/testing';
import { } from 'jasmine';

import { TestUtils } from '../../test';
import { CoursesModule } from './courses.module';


let instance: CoursesModule;
describe('Module: CoursesModule', () => {

    beforeEach(() => {
        instance = new CoursesModule();
    });

    afterEach(() => {
        instance = null;
    });

    it('is created', () => {
        expect(instance).toBeTruthy();
    });
});