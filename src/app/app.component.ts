import {Component, HostBinding, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {CommonService} from "./services/common.service";
import {Observable} from "rxjs";
import {SwUpdate} from "@angular/service-worker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  toggleControl = new FormControl(false);
  @HostBinding('class') className = 'light-theme';
  title = 'shule-soft-front-end';
  isDarkMode$: Observable<boolean>;
  constructor(
    private commonService: CommonService,
    private update: SwUpdate
  ) {
    this.isDarkMode$ = this.commonService.isDarkMode;
    update.versionUpdates.subscribe(
      event => {
        update.activateUpdate().then(() => document.location.reload());
      }
    );
  }

  ngOnInit(): void {
    const isDarkMode = localStorage.getItem('isDarkMode');
    this.toggleControl.setValue(isDarkMode === 'YES');
    this.commonService.setDarkMode(isDarkMode === 'YES');
  }
}
