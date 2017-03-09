import { Injectable } from '@angular/core';
import { courses } from './course.mocks';

@Injectable()
export class CourseService {
    getCourses() {
        return Promise.resolve(courses);
    }
}