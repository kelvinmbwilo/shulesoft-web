import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ShuleSoftAcademicComponent} from './shule-soft-academic.component';
import {AcademicMenuComponent} from './academic-menu/academic-menu.component';

export const routes: Routes = [
  {
    path: '',
    component: ShuleSoftAcademicComponent,
    children: [
      { path: '', component: AcademicMenuComponent, }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShuleSoftAcademicRoutingModule { }
