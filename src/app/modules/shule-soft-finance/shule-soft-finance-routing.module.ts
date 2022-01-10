import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ShuleSoftFinanceComponent} from './shule-soft-finance.component';
import {FinanceMenuComponent} from './finance-menu/finance-menu.component';

export const routes: Routes = [
  {
    path: '',
    component: ShuleSoftFinanceComponent,
    children: [
      { path: '', component: FinanceMenuComponent, }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShuleSoftFinanceRoutingModule { }
