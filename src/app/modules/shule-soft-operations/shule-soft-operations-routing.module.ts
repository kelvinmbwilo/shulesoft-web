import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ShuleSoftOperationsComponent} from './shule-soft-operations.component';
import {OperationsMenuComponent} from './operations-menu/operations-menu.component';

export const routes: Routes = [
  {
    path: '',
    component: ShuleSoftOperationsComponent,
    children: [
      { path: '', component: OperationsMenuComponent, }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShuleSoftOperationsRoutingModule { }
