import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from "rxjs";
import {Group} from './createGroup/Group';
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {User} from "./registerUser/User";


@Injectable()
export class SharedService {
  get userLoggedIn(): Response {
    return this._userLoggedIn;
  }

  set userLoggedIn(value: Response) {
    this._userLoggedIn = value;
  }

    domain = "https://eat-together-service-cf.cfapps.io/EatTogether/";
    //domain = "http://localhost:8080/EatTogether/";
    weatherURL1 = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22";
    weatherURL2 = "%2C%20";
    weatherURL3 = "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    findMovieURL1 = "http://www.omdbapi.com/?t=";
    findMovieURL2 = "&y=&plot=short&r=json";
    currencyURL = "http://api.fixer.io/latest?symbols=";
    aboutURL = this.domain + "about";
    saveGroupURL = this.domain + "UserGroup"
    saveUserURL = this.domain + "User"
    fetchGroupURL = this.domain + "UserGroups"
    getUserURL = this.domain + "User?username=";
    joinGroupURL = this.domain + "User/Join?groupId=";
    totReqsMade: number = 0;
    private _userLoggedIn: Response;
    constructor(private _http: Http) { }



    findMovie(movie) {
        this.totReqsMade = this.totReqsMade + 1;
        return this._http.get(this.findMovieURL1 + movie + this.findMovieURL2)
            .map(response => {
                { return response.json() };
            })
            .catch(error => Observable.throw(error.json().error));
    }

    getCurrencyExchRate(currency) {
        this.totReqsMade = this.totReqsMade + 1;
        return this._http.get(this.currencyURL + currency)
            .map(response => {
                { return response.json() };
            })
            .catch(error => Observable.throw(error.json()));
    }

    getAboutInformation() {
      return this._http.get(this.aboutURL)
        .map(response => {
          { return response};
        })
        .catch(error =>
      Observable.throw(error));
  }

    getUserGroups() {
    return this._http.get(this.fetchGroupURL)
      .map(response => {
        { return response.json()};
      })
      .catch(error =>
        Observable.throw(error));
  }

    saveUserGroup(group: Group) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.saveGroupURL, group, options)
      .map(response => {
        { return response};
      })
      .catch(error =>
        Observable.throw(error));
  }

    saveUser(user: User) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.saveUserURL, user, options)
      .map(response => {
        { return response};
      })
      .catch(error =>
        Observable.throw(error));
  }

    getUserInfo(userName) {
    return this._http.get(this.getUserURL + userName)
      .map(response => {
        {
        this.userLoggedIn = JSON.parse(response["_body"]);
          return response;
        };
      })
      .catch(error =>
        Observable.throw(error));
  }

  joinGroup(userId : number, groupid: number) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.joinGroupURL + groupid, userId, options)
      .map(response => {
        { return response};
      })
      .catch(error =>
        Observable.throw(error));
  }
}
