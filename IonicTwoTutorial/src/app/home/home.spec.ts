import { async } from '@angular/core/testing';
import { } from 'jasmine';

import { TestUtils } from '../../test';
import { HomeModule } from './home.module';

let instance: HomeModule;

describe('Component: HomeModule', () => {

    beforeEach(async(() => TestUtils.beforeEachCompiler([HomeModule]).then(compiled => {
        instance = compiled.instance;
    })));

    afterEach(() => {
        instance = null;
    });

    it('is created', () => {
        expect(instance).toBeTruthy();
    });
});