import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShuleSoftFinanceComponent } from './shule-soft-finance.component';
import {ShuleSoftFinanceRoutingModule} from './shule-soft-finance-routing.module';
import { FinanceMenuComponent } from './finance-menu/finance-menu.component';



@NgModule({
  declarations: [
    ShuleSoftFinanceComponent,
    FinanceMenuComponent
  ],
  imports: [
    CommonModule,
    ShuleSoftFinanceRoutingModule
  ]
})
export class ShuleSoftFinanceModule { }
