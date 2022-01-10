import {Component, HostBinding, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  toggleControl = new FormControl(false);
  @HostBinding('class') className = 'light-theme';
  title = 'shule-soft-front-end';

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode: any) => {
      const darkClassName = 'darkMode';
      this.className = darkMode ? 'dark-theme' : 'light-theme';
    });
  }
}
