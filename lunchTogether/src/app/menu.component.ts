import { Component, OnInit } from '@angular/core';
import {SharedService} from "./shared.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

  constructor(
    private _sharedService: SharedService,
    private router: Router
) {  }

  checkUserLogin() {
    if(this._sharedService.userLoggedIn){
          this.router.navigate(['/homepage']);
    }
  }

  ngOnInit() {
    this.checkUserLogin();
  }

}
