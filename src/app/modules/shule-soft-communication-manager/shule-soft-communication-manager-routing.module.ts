import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ShuleSoftCommunicationManagerComponent} from './shule-soft-communication-manager.component';
import {CommunicationManagerMenuComponent} from './communication-manager-menu/communication-manager-menu.component';

export const routes: Routes = [
  {
    path: '',
    component: ShuleSoftCommunicationManagerComponent,
    children: [
      { path: '', component: CommunicationManagerMenuComponent, }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShuleSoftCommunicationManagerRoutingModule { }
