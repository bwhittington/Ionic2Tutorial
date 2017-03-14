import { Injectable } from '@angular/core';
import { courses } from './course.mocks';

@Injectable()
export class CourseService {
    // constructor() { }

    public getCourses(): any {
        return courses;
    }

    public getCourse(id): any {
        return courses.find(x => x.id === id);
    }
}
