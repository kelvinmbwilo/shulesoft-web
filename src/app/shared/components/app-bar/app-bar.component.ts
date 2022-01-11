import {Component, Input, OnInit, Output} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import { EventEmitter } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl} from "@angular/forms";
import {CommonService} from "../../../services/common.service";

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
  email: any;
  // schoolLogo = 'assets/images/shulesoft_logo.png';
  schoolLogo = 'assets/images/stfransis.jpeg';
  schoolName = 'St Francis Girls';

  toggleControl = new FormControl(false);
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private commonService: CommonService,
  ) { }

  ngOnInit(): void {const isDarkMode = localStorage.getItem('isDarkMode');
    this.toggleControl.setValue(isDarkMode === 'YES');

    this.toggleControl.valueChanges.subscribe((darkMode: boolean) => {
      this.commonService.setDarkMode(darkMode);
      localStorage.setItem('isDarkMode', darkMode ? 'YES' : 'NO');
    });
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  logout() {
    // return this.authService.isLoggedIn();
  }



}
