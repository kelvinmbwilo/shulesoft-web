import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, NavigationCancel, NavigationEnd, NavigationStart, Router} from "@angular/router";
import {filter, mergeMap} from "rxjs";
import {map} from "rxjs/operators";
import {routeAnimations} from "../shared/animations/router-animation";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  animations: [routeAnimations],
})
export class PageComponent implements OnInit, AfterViewInit {

  loading = false;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel
      ) {
        this.loading = false;
      }
    });
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route: any) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    ).subscribe((event: any) => this.titleService.setTitle(event['title']));
  }

}
