import { Component, OnInit } from '@angular/core';

import { SharedService } from './../shared.service';
import {Group} from './Group';


@Component({
  selector: 'app-weather',
  templateUrl: './createGroup.component.html',
  styles: []
})
export class CreateGroupComponent implements OnInit {
  about: string = '';
  topics = ["Technical","Movies","New Ideas", "General","Others"];
  groups: Group[];
  group =  new Group();
  successMessage: string = '';
  constructor(private _sharedService: SharedService) {
  }


/*  callWeatherService() {
    this._sharedService.findWeather(this.id_city, this.id_state)
      .subscribe(
      lstresult => {
        this.op_city = lstresult["query"]["results"]["channel"]["location"]["city"];
        this.op_region = lstresult["query"]["results"]["channel"]["location"]["region"];
        this.op_country = lstresult["query"]["results"]["channel"]["location"]["country"];
        this.op_date = lstresult["query"]["results"]["channel"]["item"]["condition"]["date"];
        this.op_text = lstresult["query"]["results"]["channel"]["item"]["condition"]["text"];
        this.op_temp = lstresult["query"]["results"]["channel"]["item"]["condition"]["temp"];
      },
      error => {
        console.log("Error. The findWeather result JSON value is as follows:");
        console.log(error);
      }
      );
  }*/

  callAboutService() {
    this._sharedService.getAboutInformation()
      .subscribe(
        result => {
          this.about = JSON.stringify(result["_body"]);
        },
        error => {
          console.log('Error The callAboutService result JSON value is as follows:');
          console.log(error);
        }
      );

  }

  callFetchGroupService() {
    this._sharedService.getUserGroups()
      .subscribe(
        result => {
          this.groups = result;
        },
        error => {
          console.log('Error The callFetchGroupService result JSON value is as follows:');
          console.log(error);
        }
      );

  }

  callSaveGroupService() {
    this._sharedService.saveUserGroup(this.group)
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


  ngOnInit() {
    this.callAboutService();
    this.callFetchGroupService();
  }

}
