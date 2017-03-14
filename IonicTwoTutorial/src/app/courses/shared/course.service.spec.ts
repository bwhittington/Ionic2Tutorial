import { CourseService } from './course.service';

let courseService;

describe('Service: Courses', () => {

    beforeEach(() => {
        courseService = new CourseService();
    });

    it('should have a non empty array called courses', () => {

        let courses = courseService.getCourses();

        expect(Array.isArray(courses)).toBeTruthy();
        expect(courses.length).toBeGreaterThan(0);

    });

    it('should return specified course when requested by Id', () => {
        let course = courseService.getCourse(1);

        expect(course.id).toBe(1);
        expect(course.name).toBe('C#/.NET');
        expect(course.syllabus).toBe('');
    });
});