import { CourseModel } from './course.model';

let course: CourseModel;

describe('Model: Courses', () => {

    beforeEach(() => {
        course = new CourseModel();
    });

    it('should return the correct properties', () => {
        course.name = 'Cordova';
        course.id = 1;
        course.syllabus = 'Testing';

        expect(course.name).toBe('Cordova');
        expect(course.id).toBe(1);
        expect(course.syllabus).toBe('Testing');
    });
});