import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {

  constructor(private route: Router, private router: ActivatedRoute) { }

  result: any;
  show: string;

  ngOnInit() {
    console.log(this.router.params);
    console.log('OMG');
    this.result = this.router.params;
    if (this.result._value.discussionVal) {
      this.show = this.result._value.discussionVal;
    }
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
  
}
