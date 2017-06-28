import { Component } from '@angular/core';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { StarComponent } from './star/star.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Udemy Angular App!';
  post = {
    title: "Title",
    isStar: true
  }

  onStarChange($event){
    console.log($event);
  }

}
