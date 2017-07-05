import { Component } from '@angular/core';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { StarComponent } from './star/star.component';
import { HeartComponent } from './heart/heart.component';
import { VoteComponent } from './vote/vote.component';
import { SwitchComponent } from './switch/switch.component';
import { PipeComponent } from './pipe/pipe.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  viewMode = 'map';
  title = 'Udemy Angular App!';
  post = {
    title: "Title",
    isStar: true
  };
  tweet = {
    totalLikes: 10,
    isLiked: false
  };
  vote = {
    voteCount: 10,
    myVote: 0
  }

  onVoteChange($event){
    console.log($event);
  }

  onStarChange($event){
    console.log($event);
  }

}
