import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { CreateGroupComponent } from './createGroup/createGroup.component';
import { JoinGroupComponent } from './joinGroup/joinGroup.component';
import { MoreComponent } from './more/more.component';
import { CONST_ROUTING } from './app.routing';
import { SharedService } from "./shared.service";
import {HomePageComponent} from "./homePage/homePage.component";
import {RegisterUserComponent} from "./registerUser/registerUser.component";
import {LoginPageComponent} from "./LoginPage/loginPage.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CreateGroupComponent,
    JoinGroupComponent,
    MoreComponent,
    HomePageComponent,
    RegisterUserComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CONST_ROUTING
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
