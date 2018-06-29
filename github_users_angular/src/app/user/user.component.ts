import { Component, OnInit, OnDestroy} from '@angular/core';
import {UserService} from '../services/user.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users;
  public SelectedUser;
  private filterUser;
  private obs;
  private obsFolow;
  private obsOrgs;
  private obsSearch;
  private obsSubs;
  private obsRepos;
  private repos;
  private subs;
  private followers;
  private loadingFollowers: Boolean = true;
  private show: Boolean = false;
  private orgs;

  constructor(private service: UserService) {
   }

  ngOnInit() {
   this.obs = this.service.getUsers().subscribe(users => {this.users =users; console.log(this.users)});
  }

  ngOnDestroy(): void {
    this.obs.unsubscribe()
    this.obsFolow.unsubscribe();
    this.obsOrgs.unsubscribe();
    this.obsSearch.unsubscribe();
    this.obsSubs.unsubscribe();
    this.obsRepos.unsubscribe();

  }

  MoreDetails(user) {
    this.show = true;
    this.SelectedUser = user;
    this.getUsersFollowers(user);
    this.getUsersOrgs(user)
    this.getSubscription(user)
    this.getRepos(user);
    // console.log(Object.keys(this.followers).length)

  }
  getSubscription(user) {
    this.obsSubs = this.service.getSubscription(user.login).subscribe(res => {
      this.SelectedUser.subs = res;
      this.subs = this.SelectedUser.subs;
    }, err => {
      console.log(err);
    })
  }
  getUsersOrgs(user) {
    this.obsOrgs = this.service.getUserOrgs(user.login).subscribe(res => {
      this.SelectedUser.orgs = res;
      this.orgs = this.SelectedUser.orgs;
      console.log(this.orgs)
    }, err => {
      console.log(err);
    });
  }
  getUsersFollowers(user) {
    this.obsFolow = this.service.getUserFollowers(user.login).subscribe(res => {
      this.SelectedUser.followers = res;
      this.followers = this.SelectedUser.followers;
      console.log(this.followers)
      if (this.followers) {
        this.loadingFollowers = false
      }
    }, err => {
      console.log(err);
      this.loadingFollowers = true;
    });
  }

  getRepos(user) {
    this.obsRepos = this.service.getRepos(user.login).subscribe(res => {
      this.SelectedUser.repos = res;
      this.repos = this.SelectedUser.repos;
      console.log(this.repos)
    }, err => {
      console.log(err);
    });
  }

  goHome() {
    this.show = false
  }

  filterUsers(type: string) {
    this.filterUser = this.users.filter(user => user.type === type)
    this.users = this.filterUser;
  }
  onSearch(login) {
    this.obsSearch = this.service.onSearch(login).subscribe(users => {
      this.filterUser = users;
      this.users = this.filterUser;
    })
  }

}
