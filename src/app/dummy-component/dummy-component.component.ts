import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ROUTE_ANIMATIONS_ELEMENTS} from "../shared/animations/router-animation";

@Component({
  selector: 'app-dummy-component',
  templateUrl: './dummy-component.component.html',
  styleUrls: ['./dummy-component.component.scss']
})
export class DummyComponentComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log('from dummy comp', this.router.url);
    });
  }

}
