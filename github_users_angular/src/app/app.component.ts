import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private obs;
  private github_users;
  public users;
  private filterUser;
  private obsSearch;


  constructor(private service:UserService) {
  }
  ngOnInit() {
    this.obs = this.service.getUsers().subscribe(users => { this.github_users = users; this.users = users; console.log(this.users) });
  }
  ngOnDestroy(): void {
    this.obs.unsubscribe()
    this.obsSearch.unsubscribe()
 }

  filterUsers(type: string) {
     this.filterUser = [];
    this.users = this.github_users;
    this.users.map(user => {
        if(user.type === type) {
          this.filterUser.push(user)
    }})
    this.users = this.filterUser;
  }
//don't work
//Error trying to diff '[object Object]'.
  onSearch(user:string){
    this.obsSearch = this.service.onSearch(user).subscribe(user => {
      this.users = user;
    })
  }
}
