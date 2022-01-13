import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MainNavComponent} from "./main-nav/main-nav.component";
import {PageComponent} from "./page/page.component";

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'apps', component: HomeComponent},
  {
    path: 'module', component: PageComponent, children: [
      {
        path: 'academics',
        loadChildren: () => import('./modules/shule-soft-academic/shule-soft-academic.module').then(m => m.ShuleSoftAcademicModule),
        data: {preload: false, delay: true},
      },
      {
        path: 'users',
        loadChildren: () => import('./modules/shule-soft-users/shule-soft-users.module').then(m => m.ShuleSoftUsersModule),
        data: {preload: false, delay: true},
      },
      {
        path: 'finance',
        loadChildren: () => import('./modules/shule-soft-finance/shule-soft-finance.module').then(m => m.ShuleSoftFinanceModule),
        data: {preload: false, delay: true},
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
