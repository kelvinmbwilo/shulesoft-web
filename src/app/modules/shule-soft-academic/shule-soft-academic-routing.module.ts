import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DummyComponentComponent} from "../../dummy-component/dummy-component.component";
import {ClassesComponent} from "./classes/classes.component";
import {SectionsComponent} from "./sections/sections.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SubjectListComponent} from "./subjects/subject-list/subject-list.component";
import {ClassSubjectComponent} from "./subjects/class-subject/class-subject.component";
import {SectionSubjectTeacherComponent} from "./subjects/section-subject-teacher/section-subject-teacher.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
  },
  {
    path: 'sections',
    component: SectionsComponent,
    data: {state: 'sections', title: 'Sections'}
  },
  {
    path: 'class',
    component: ClassesComponent,
    data: {state: 'sections', title: 'Sections'}
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {state: 'sections', title: 'Sections'}
  },
  {
    path: 'subjects',
    component: SubjectListComponent,
    data: {state: 'subjects', title: 'Subjects'}
  },
  {
    path: 'subjects/subject-list',
    component: SubjectListComponent,
    data: {state: 'subject-list', title: 'Subject List'}
  },
  {
    path: 'subjects/class-subject',
    component: ClassSubjectComponent,
    data: {state: 'class-subject', title: 'Class Subjects'}
  },
  {
    path: 'subjects/section-subject-teacher',
    component: SectionSubjectTeacherComponent,
    data: {state: 'section-subject-teacher', title: 'Section Subject Teacher'}
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShuleSoftAcademicRoutingModule {
}
