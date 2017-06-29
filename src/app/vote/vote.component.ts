import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  @Input() voteCount = 0;
  @Input() myVote = 0;

  @Output() change = new EventEmitter();

  onClickUp(){
    console.log("clicked up!");
    if (this.myVote == 1)
        return;
    this.myVote++;
    this.change.emit({ myVote: this.myVote });
  }

  onClickDown(){
    console.log("clicked down!");
    if (this.myVote == -1)
        return;
    this.myVote--;
    this.change.emit({ myVote: this.myVote });
  }

  constructor() { }

  ngOnInit() {
  }

}
