import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MainNavComponent} from "./main-nav/main-nav.component";

const routes: Routes = [
  { path: '', component: MainNavComponent, pathMatch: 'full' },
  { path: 'apps', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
