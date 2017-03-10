import { Injectable } from '@angular/core';
import { courses } from './course.mocks';

@Injectable()
export class CourseService {
    constructor() { }

    public getCourses() {
        return courses;
    }
}