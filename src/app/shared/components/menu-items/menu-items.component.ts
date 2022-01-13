import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ROUTE_ANIMATIONS_ELEMENTS} from '../../animations/router-animation';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {ApplicationState} from '../../../store';
import {Go} from '../../../store/router/router.action';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {
  @Input() menus: {
    name: string;
    route: string[];
    description: string;
    icon?: string;
    image?: string;
    children?: any[];
  }[] = [];
  displayMenus: {
  name: string;
  route: string[];
  description: string;
  icon?: string;
  image?: string;
  children?: any[];
}[] = [];
  @Output() menuClicked = new EventEmitter();
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<ApplicationState>,
  ) { }

  ngOnInit(): void {
    this.displayMenus = this.menus.map(i => ({
      ...i,
      description: i.children?.map(k => k.name).join(', ') || ''
    }))
  }

  goTo(menu: any) {
    if (menu.route) {
      this.store.dispatch(new Go({path: menu.pathRoute}));
    } else {
      this.menuClicked.emit(menu);
    }
  }
}
