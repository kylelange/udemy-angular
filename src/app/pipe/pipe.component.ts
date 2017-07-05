import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})

export class PipeComponent implements OnInit {
  post = {
    title: 'A custom Angular pipe!',
    body: 'This summary pipe allows a user to see the first 50 characters of their message.'
  };

  constructor() { }

  ngOnInit() {
  }

}
