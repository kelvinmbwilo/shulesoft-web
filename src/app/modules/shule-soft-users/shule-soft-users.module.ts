import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShuleSoftUsersComponent } from './shule-soft-users.component';
import {ShuleSoftUsersRoutingModule} from './shule-soft-users-routing.module';
import { UsersMenuComponent } from './users-menu/users-menu.component';
import {SharedModule} from "../../shared/shared.module";
import { StudentsComponent } from './students/students.component';
import { ParentsComponent } from './parents/parents.component';
import { TeachersComponent } from './teachers/teachers.component';
import { SupportingStaffComponent } from './supporting-staff/supporting-staff.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';



@NgModule({
  declarations: [
    ShuleSoftUsersComponent,
    UsersMenuComponent,
    StudentsComponent,
    ParentsComponent,
    TeachersComponent,
    SupportingStaffComponent,
    UserDashboardComponent
  ],
  imports: [
    CommonModule,
    ShuleSoftUsersRoutingModule,
    SharedModule,
  ]
})
export class ShuleSoftUsersModule { }
