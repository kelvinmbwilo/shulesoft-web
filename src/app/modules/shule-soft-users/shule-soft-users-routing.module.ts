import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ShuleSoftUsersComponent} from './shule-soft-users.component';
import {SupportingStaffComponent} from "./supporting-staff/supporting-staff.component";
import {UserDashboardComponent} from "./user-dashboard/user-dashboard.component";
import {TeachersComponent} from "./teachers/teachers.component";
import {ParentsComponent} from "./parents/parents.component";
import {StudentsComponent} from "./students/students.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
  },
  {
    path: 'students',
    component: StudentsComponent,
    data: {state: 'students', title: 'Students'}
  },
  {
    path: 'parents',
    component: ParentsComponent,
    data: {state: 'parents', title: 'Parents'}
  },
  {
    path: 'teachers',
    component: TeachersComponent,
    data: {state: 'teachers', title: 'Teachers'}
  },
  {
    path: 'dashboard',
    component: UserDashboardComponent,
    data: {state: 'dashboard', title: 'User Dashboard'}
  },
  {
    path: 'supporting-staff',
    component: SupportingStaffComponent,
    data: {state: 'supporting-staff', title: 'Supporting Staff'}
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShuleSoftUsersRoutingModule {
}


