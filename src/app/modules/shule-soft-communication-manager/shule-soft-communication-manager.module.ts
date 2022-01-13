import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShuleSoftCommunicationManagerComponent } from './shule-soft-communication-manager.component';
import {ShuleSoftCommunicationManagerRoutingModule} from './shule-soft-communication-manager-routing.module';
import { CommunicationManagerMenuComponent } from './communication-manager-menu/communication-manager-menu.component';
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    ShuleSoftCommunicationManagerComponent,
    CommunicationManagerMenuComponent
  ],
  imports: [
    CommonModule,
    ShuleSoftCommunicationManagerRoutingModule,
    SharedModule,
  ]
})
export class ShuleSoftCommunicationManagerModule { }
