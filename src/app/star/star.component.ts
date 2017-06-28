import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() isStar = false;

  @Output() change = new EventEmitter();

  constructor() { }
  star;

  ngOnInit() {
  }

  onClick(){
    //console.log("clicked!");
    this.isStar = !this.isStar;
    this.change.emit({ newValue: this.isStar });
  }

}
