import { Routes, RouterModule } from '@angular/router';
import { JoinGroupComponent } from "./joinGroup/joinGroup.component";
import { CreateGroupComponent } from "./createGroup/createGroup.component";
import { MoreComponent } from "./more/more.component";
import { HomePageComponent } from "./homePage/homePage.component";
import {RegisterUserComponent} from "./registerUser/registerUser.component";
import {LoginPageComponent} from "./LoginPage/loginPage.component";
const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'register', component: RegisterUserComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'homePage', component: HomePageComponent },
    { path: 'createGroup', component: CreateGroupComponent },
    { path: 'joinGroup', component: MoreComponent },
    { path: 'more', component: JoinGroupComponent }
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
