import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../shared.service";
import {Group} from '../createGroup/Group';

@Component({
  selector: 'app-movie',
  templateUrl: './more.component.html',
  styles: []
})
export class MoreComponent implements OnInit {
    id_movie: string = "";
    mv_Title: string = "";
    mv_Rated: string = "";
    mv_Released: string = "";
    mv_Director: string = "";
    mv_Actors: string = "";
    mv_Plot: string = "";
  groups: Group[];
  private userId: number;
  private successMessage: any;
    constructor(private _sharedService: SharedService) {
    }

    ngOnInit() {
      this.callFetchGroupService();
    }

    callMovieService() {
        this._sharedService.findMovie(this.id_movie)
            .subscribe(
            lstresult => {
                this.mv_Title = lstresult["Title"];
                this.mv_Rated = lstresult["Rated"];
                this.mv_Released = lstresult["Released"];
                this.mv_Director = lstresult["Director"];
                this.mv_Actors = lstresult["Actors"];
                this.mv_Plot = lstresult["Plot"];
            },
            error => {
                console.log("Error. The findMovie result JSON value is as follows:");
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

  joinGroup(groupId: number) {
    this.userId = this._sharedService.userLoggedIn["id"];
    this._sharedService.joinGroup(this.userId, groupId)
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
