import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ShuleSoftDigitalLearningComponent} from './shule-soft-digital-learning.component';
import {DigitalLearningMenuComponent} from './digital-learning-menu/digital-learning-menu.component';

export const routes: Routes = [
  {
    path: '',
    component: ShuleSoftDigitalLearningComponent,
    children: [
      { path: '', component: DigitalLearningMenuComponent, }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShuleSoftDigitalLearningRoutingModule { }
