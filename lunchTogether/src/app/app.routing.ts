import { Routes, RouterModule } from '@angular/router';
import { JoinGroupComponent } from "./joinGroup/joinGroup.component";
import { CreateGroupComponent } from "./createGroup/createGroup.component";
import { MoreComponent } from "./more/more.component";
const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/createGroup', pathMatch: 'full' },
    { path: 'createGroup', component: CreateGroupComponent },
    { path: 'joinGroup', component: MoreComponent },
    { path: 'more', component: JoinGroupComponent }
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
