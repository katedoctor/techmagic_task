import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import {UserService} from '../services/user.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public SelectedUser;
  private obs;
  private obsFolow;
  private obsOrgs;
  private obsSubs;
  private obsRepos;
  private repos;
  private subs;
  private followers;
  private loadingFollowers: Boolean = true;
  private show: Boolean = false;
  private orgs;
  private numFollowers: Number;
  @Input() users;

  constructor(private service: UserService) {

   }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    this.obsFolow.unsubscribe();
    this.obsOrgs.unsubscribe();
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
    console.log(user)
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
      if(!Object.keys(this.orgs).length){
       this.orgs = false
      }
      console.log(this.orgs);
    }, err => {
      console.log(err);
    });
  }

  getUsersFollowers(user) {
    this.obsFolow = this.service.getUserFollowers(user.login).subscribe(res => {
      this.SelectedUser.followers = res;
      this.followers = this.SelectedUser.followers;
      this.numFollowers = Object.keys(this.followers).length;
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
      this.repos = Object.keys(this.SelectedUser.repos).length;
      console.log(Object.keys(this.SelectedUser.repos).length)
      console.log(this.repos)
    }, err => {
      console.log(err);
    });
  }

  goHome() {
    this.show = false
  }



}
