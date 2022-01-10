import {Component, Input, OnInit, Output} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import { EventEmitter } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  @Input() usedInApps = false;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  loading$!: Observable<boolean>;
  userName = 'Kelvin Mbwilo';
  userPhoto = 'assets/images/profile-male.png';
  email: any;
  // schoolLogo = 'assets/images/shulesoft_logo.png';
  schoolLogo = 'assets/images/stfransis.jpeg';
  schoolName = 'St Francis Girls';
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  logout() {
    // return this.authService.isLoggedIn();
  }


}
