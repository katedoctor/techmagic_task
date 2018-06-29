import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private obs;
  constructor(private service:UserService) {
  }
  ngOnInit() {
  }
}
