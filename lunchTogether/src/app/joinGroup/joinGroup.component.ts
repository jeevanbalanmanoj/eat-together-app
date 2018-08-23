import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../shared.service";
import {Group} from '../createGroup/Group';

@Component({
  selector: 'app-currency',
  templateUrl: './joinGroup.component.html',
  styles: []
})
export class JoinGroupComponent implements OnInit {

  id_currency: string = "";
  my_result: any;
  groups: Group[];
  constructor(private _sharedService: SharedService) {
  }

  ngOnInit() {
    this.callFetchGroupService();
  }

  callCurrencyService() {
    this._sharedService.getCurrencyExchRate(this.id_currency.toUpperCase())
      .subscribe(
      lstresult => {
                this.my_result = JSON.stringify(lstresult);
      },
      error => {
        console.log("Error. The callCurrencyService result JSON value is as follows:");
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
}
