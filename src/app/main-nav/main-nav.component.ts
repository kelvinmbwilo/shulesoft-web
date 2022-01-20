import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import { Store} from "@ngrx/store";
import {OfflineManagerService} from "../services/offline-manager.service";
import {ApplicationState} from "../store";
import {Go} from "../store/router/router.action";
import {Observable} from "rxjs";
import {LocalStorageService} from "../services/local-storage.service";
import {map} from "rxjs/operators";
import { menuOptions } from './menu-options';
import {ActivatedRoute, Router} from "@angular/router";
import {CommonService} from "../services/common.service";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
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
  helpOpened$: Observable<boolean>;
  helpText$: Observable<string>;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private offlineManager: OfflineManagerService,
    private localStorageService: LocalStorageService,
    private store: Store<ApplicationState>,
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,

  ) {
    this.helpOpened$ = this.commonService.showHElp1;
    this.helpText$ = this.commonService.helpText;
  }

  ngOnInit() {
    this.route.url.subscribe(params => {
      console.log('from main nav', this.router.url);
      const route = this.router.url.split('/');
      console.log(route);
      const moduleRoute = route[2];
      const subModuleRoute = route[3];
      if (subModuleRoute) {
        this.currentMenu = subModuleRoute;
      }
      if (moduleRoute) {
        const menu = this.menus.find(i => i.route.indexOf(moduleRoute) > -1);
        this.setMenus(menu);
      }
    });
  }

  logout() {
    this.store.dispatch(new Go({ path: ['login'] }));
  }

  setMenus(menu: any) {
    console.log(menu);
    this.menuItems = menu.children;
  }

  check($event: boolean) {
  }


  closeHelp() {
    this.commonService.closeHelp();
  }

}
