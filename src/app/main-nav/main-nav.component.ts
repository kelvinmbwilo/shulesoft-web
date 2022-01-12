import { Component } from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import { Store} from "@ngrx/store";
import {OfflineManagerService} from "../services/offline-manager.service";
import {ApplicationState} from "../store";
import {Go} from "../store/router/router.action";
import {Observable} from "rxjs";
import {LocalStorageService} from "../services/local-storage.service";
import {map} from "rxjs/operators";
import { menuOptions } from './menu-options';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  isOpen = true;
  menus = menuOptions;
  loading: boolean = false;
  appName: string = '';
  appImage: string = 'stfransis.jpeg';
  menuItems: any[] = [];
  currentMenu: any;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private offlineManager: OfflineManagerService,
    private localStorageService: LocalStorageService,
    private store: Store<ApplicationState>
  ) { }

  logout() {
    this.store.dispatch(new Go({ path: ['login'] }));
  }

  setMenus(menu: any) {
    console.log(menu);
    this.menuItems = menu.children;
  }
}
