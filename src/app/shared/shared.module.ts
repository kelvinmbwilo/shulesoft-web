import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MaterialModule} from './material-module/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MenuItemsComponent} from './components/menu-items/menu-items.component';
import {AppBarComponent} from './components/app-bar/app-bar.component';
import {NotificationsComponent} from './components/notifications/notifications.component';
import {DummyComponentComponent} from "../dummy-component/dummy-component.component";
import {SharedLayoutComponent} from "./components/shared-layout/shared-layout.component";
import {TopBannerComponent} from "./components/topbanner/top-banner.component";
import {FullDataTableComponent} from "./components/full-data-table/full-data-table.component";
import {LoaderComponent} from "./components/loader/loader.component";
import {SearchPipe} from "./pipes/search.pipe";
import {WithoutPipe} from "./pipes/without.pipe";
import {OrderPipe} from "./pipes/order-by.pipe";
import {SafePipe} from "./pipes/safe.pipe";
import {ShowButtonPipe} from "./components/full-data-table/show-button.pipe";
import {FilterByNamePipe} from "./pipes/filter-by-name.pipe";
import {IncludingPipe} from "./pipes/including.pipe";
import {FormatNumberPipe} from "./pipes/format-number.pipe";
import {ShowOtherButtonsPipe} from "./components/full-data-table/show-other-buttons.pipe";
import {HasPermissionDirective} from "./directives/has-permission.directive";
import {FieldTakenValidatorDirective} from "./directives/field-taken-validator.directive";
import {ClickOutsideDirective} from "./directives/click-outside.directive";


@NgModule({
  declarations: [
    // Pipes
    FilterByNamePipe,
    FormatNumberPipe,
    IncludingPipe,
    OrderPipe,
    SafePipe,
    SearchPipe,
    WithoutPipe,
    ShowButtonPipe,
    ShowOtherButtonsPipe,
    // Directives
    ClickOutsideDirective,
    HasPermissionDirective,
    FieldTakenValidatorDirective,
    // Components
    MenuItemsComponent,
    AppBarComponent,
    NotificationsComponent,
    DummyComponentComponent,
    SharedLayoutComponent,
    TopBannerComponent,
    FullDataTableComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,

    // Pipes
    FilterByNamePipe,
    FormatNumberPipe,
    IncludingPipe,
    OrderPipe,
    SafePipe,
    SearchPipe,
    WithoutPipe,
    ShowButtonPipe,
    ShowOtherButtonsPipe,
    // Directives
    ClickOutsideDirective,
    HasPermissionDirective,
    FieldTakenValidatorDirective,

    // Components
    MenuItemsComponent,
    AppBarComponent,
    DummyComponentComponent,
    SharedLayoutComponent,
    TopBannerComponent,
    FullDataTableComponent,
    LoaderComponent,
  ]
})
export class SharedModule {
}
