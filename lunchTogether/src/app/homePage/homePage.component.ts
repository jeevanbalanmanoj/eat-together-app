import {Component, OnInit} from "@angular/core";
import {SharedService} from "../shared.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homePage.component.html',
  styles: []
})
export class HomePageComponent implements OnInit{
  user: string = '';
  constructor(private _sharedService: SharedService,
              private router: Router) {
  }

  getUserName(){
    if(this._sharedService.userLoggedIn){
      this.user = this._sharedService.userLoggedIn["firstName"] + this._sharedService.userLoggedIn["lastName"];
    }
   else{
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
    this.getUserName();
  }

}
