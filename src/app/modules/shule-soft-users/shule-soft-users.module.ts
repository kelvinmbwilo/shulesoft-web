import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShuleSoftUsersComponent } from './shule-soft-users.component';
import {ShuleSoftUsersRoutingModule} from './shule-soft-users-routing.module';
import { UsersMenuComponent } from './users-menu/users-menu.component';



@NgModule({
  declarations: [
    ShuleSoftUsersComponent,
    UsersMenuComponent
  ],
  imports: [
    CommonModule,
    ShuleSoftUsersRoutingModule
  ]
})
export class ShuleSoftUsersModule { }
