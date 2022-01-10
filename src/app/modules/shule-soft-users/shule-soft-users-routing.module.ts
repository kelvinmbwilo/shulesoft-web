import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ShuleSoftUsersComponent} from './shule-soft-users.component';
import {UsersMenuComponent} from './users-menu/users-menu.component';

export const routes: Routes = [
  {
    path: '',
    component: ShuleSoftUsersComponent,
    children: [
      { path: '', component: UsersMenuComponent, }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShuleSoftUsersRoutingModule { }


