import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShuleSoftOperationsComponent } from './shule-soft-operations.component';
import {ShuleSoftOperationsRoutingModule} from './shule-soft-operations-routing.module';
import { OperationsMenuComponent } from './operations-menu/operations-menu.component';



@NgModule({
  declarations: [
    ShuleSoftOperationsComponent,
    OperationsMenuComponent
  ],
  imports: [
    CommonModule,
    ShuleSoftOperationsRoutingModule
  ]
})
export class ShuleSoftOperationsModule { }
