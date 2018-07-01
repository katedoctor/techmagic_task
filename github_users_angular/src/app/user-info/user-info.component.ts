import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input() loadingFollowers;
  @Input() SelectedUser;
  @Input() repos;
  @Input() subs;
  @Input() orgs;
  @Input() followers;
  @Input() numFollowers;
  @Output() details = new EventEmitter<any>();
  @Output() goHome = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  emitMoreDetails(follower) {
    this.details.emit(follower);
    console.log(follower)
  }
  emitGoHome(e){
    this.goHome.emit(e);
  }

}
