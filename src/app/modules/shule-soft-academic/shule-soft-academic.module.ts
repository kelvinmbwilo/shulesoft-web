import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShuleSoftAcademicComponent } from './shule-soft-academic.component';
import {ShuleSoftAcademicRoutingModule} from './shule-soft-academic-routing.module';
import { AcademicMenuComponent } from './academic-menu/academic-menu.component';



@NgModule({
  declarations: [
    ShuleSoftAcademicComponent,
    AcademicMenuComponent
  ],
  imports: [
    CommonModule,
    ShuleSoftAcademicRoutingModule,
  ]
})
export class ShuleSoftAcademicModule { }
