import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';


@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CourseService]
})

export class CoursesComponent implements OnInit {
  title = "Courses Section"
  courses;

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }

  ngOnInit() {
  }

}
