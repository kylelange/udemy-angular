import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { StarComponent } from './star/star.component';
import { HeartComponent } from './heart/heart.component';
import { VoteComponent } from './vote/vote.component';
import { SwitchComponent } from './switch/switch.component';
import { PipeComponent } from './pipe/pipe.component';
import {SummaryPipe} from './pipe/summary.pipe';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    StarComponent,
    HeartComponent,
    VoteComponent,
    SwitchComponent,
    PipeComponent,
    SummaryPipe,
    ZippyComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
