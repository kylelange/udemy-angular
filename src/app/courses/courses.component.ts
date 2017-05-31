import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CourseService]
})
export class CoursesComponent implements OnInit {
  title = "The Title of the courses page..."
  courses;

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }

  ngOnInit() {
  }

}
