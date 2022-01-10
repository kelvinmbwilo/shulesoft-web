import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ShuleSoftConfigurationComponent} from './shule-soft-configuration.component';
import {ConfigurationMenuComponent} from './configuration-menu/configuration-menu.component';

export const routes: Routes = [
  {
    path: '',
    component: ShuleSoftConfigurationComponent,
    children: [
      { path: '', component: ConfigurationMenuComponent, }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShuleSoftConfigurationRoutingModule { }
