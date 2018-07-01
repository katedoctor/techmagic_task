import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import 'rxjs/operators/map';

@Injectable()
export class UserService {

  constructor(private _http: HttpClient) {
  }

  getUsers():Observable<Object> {
    return this._http.get("https://api.github.com/users")
  }
  getUserFollowers(user:string): Observable<any> {
    return this._http.get("https://api.github.com/users/" + user + '/followers')
  }
  getUserOrgs(user: string): Observable<any> {
    return this._http.get("https://api.github.com/users/" + user + '/orgs')
  }
  onSearch(user: string): Observable<any> {
    return this._http.get("https://api.github.com/users/" + user)
  }
  getSubscription(user:string) {
    return this._http.get("https://api.github.com/users/" + user + "/subscriptions")
  }
  getRepos(user: string) {
    return this._http.get("https://api.github.com/users/" + user + "/repos")
  }
}
