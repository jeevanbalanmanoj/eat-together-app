///<reference path="../registerUser/User.ts"/>
import { Component, OnInit } from '@angular/core';

import { SharedService } from './../shared.service';
import { Router } from '@angular/router';
import {User} from "../registerUser/User";


@Component({
  selector: 'app-login',
  templateUrl: './loginPage.component.html',
  styles: []
})
export class LoginPageComponent {
  user = new User();
  loggedInUser = new User();
  private message: string;
  constructor(
    private _sharedService: SharedService,
    private router: Router) {
  }

  getUserInfoByUserName() {
    this._sharedService.getUserInfo(this.user.username)
      .subscribe(
        result => {
          if(result["_body"]){
            this.loggedInUser = JSON.parse(result["_body"]);
            console.log(this.loggedInUser.password);
            if(this.loggedInUser.password === this.user.password){
              this.router.navigate(['/homePage']);
            }
            else{
              this.message = "Username or Password is invalid";
            }
          }
          else{
            this.message = "Username or Password is incorrect";
          }
        },
        error => {
          console.log('Error The callAboutService result JSON value is as follows:');
          console.log(error);
        }
      );

  }


}
