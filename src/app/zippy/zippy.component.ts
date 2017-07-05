import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {
  isExpanded = false;
  @Input() title: string;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  constructor() { }

  ngOnInit() {
  }

}
