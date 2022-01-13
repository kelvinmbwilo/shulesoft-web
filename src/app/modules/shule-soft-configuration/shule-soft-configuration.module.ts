import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShuleSoftConfigurationComponent } from './shule-soft-configuration.component';
import {ShuleSoftConfigurationRoutingModule} from './shule-soft-configuration-routing.module';
import { ConfigurationMenuComponent } from './configuration-menu/configuration-menu.component';
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    ShuleSoftConfigurationComponent,
    ConfigurationMenuComponent
  ],
  imports: [
    CommonModule,
    ShuleSoftConfigurationRoutingModule,
    SharedModule,
  ]
})
export class ShuleSoftConfigurationModule { }
