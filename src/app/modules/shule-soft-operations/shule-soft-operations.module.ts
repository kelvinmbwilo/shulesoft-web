import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShuleSoftOperationsComponent } from './shule-soft-operations.component';
import {ShuleSoftOperationsRoutingModule} from './shule-soft-operations-routing.module';
import { OperationsMenuComponent } from './operations-menu/operations-menu.component';
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    ShuleSoftOperationsComponent,
    OperationsMenuComponent
  ],
  imports: [
    CommonModule,
    ShuleSoftOperationsRoutingModule,
    SharedModule,
  ]
})
export class ShuleSoftOperationsModule { }
