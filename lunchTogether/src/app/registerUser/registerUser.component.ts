import { Component, OnInit } from '@angular/core';

import { SharedService } from './../shared.service';
import {User} from './User';


@Component({
  selector: 'app-weather',
  templateUrl: './registerUser.component.html',
  styles: []
})
export class RegisterUserComponent{
  about: string = '';
  user =  new User();
  successMessage: string = '';
  constructor(private _sharedService: SharedService) {
  }

  callSaveUserService() {
    this._sharedService.saveUser(this.user)
      .subscribe(
        result => {
          this.successMessage = result;
        },
        error => {
          console.log('Error The callFetchGroupService result JSON value is as follows:');
          console.log(error);
        }
      );

  }

}
