import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.css']
})
export class HeartComponent implements OnInit {
  @Input() totalLikes = 0;
  @Input() isLiked = false;

  onClick() {
    this.isLiked = !this.isLiked;
    this.totalLikes += this.isLiked ? 1 : -1;
  }

  constructor() { }

  ngOnInit() {
  }

}
