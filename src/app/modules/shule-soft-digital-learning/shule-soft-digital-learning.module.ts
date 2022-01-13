import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShuleSoftDigitalLearningComponent } from './shule-soft-digital-learning.component';
import {ShuleSoftDigitalLearningRoutingModule} from './shule-soft-digital-learning-routing.module';
import { DigitalLearningMenuComponent } from './digital-learning-menu/digital-learning-menu.component';
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    ShuleSoftDigitalLearningComponent,
    DigitalLearningMenuComponent
  ],
  imports: [
    CommonModule,
    ShuleSoftDigitalLearningRoutingModule,
    SharedModule,
  ]
})
export class ShuleSoftDigitalLearningModule { }
