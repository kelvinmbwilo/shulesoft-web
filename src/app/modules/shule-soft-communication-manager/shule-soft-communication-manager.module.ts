import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShuleSoftCommunicationManagerComponent } from './shule-soft-communication-manager.component';
import {ShuleSoftCommunicationManagerRoutingModule} from './shule-soft-communication-manager-routing.module';
import { CommunicationManagerMenuComponent } from './communication-manager-menu/communication-manager-menu.component';



@NgModule({
  declarations: [
    ShuleSoftCommunicationManagerComponent,
    CommunicationManagerMenuComponent
  ],
  imports: [
    CommonModule,
    ShuleSoftCommunicationManagerRoutingModule
  ]
})
export class ShuleSoftCommunicationManagerModule { }
