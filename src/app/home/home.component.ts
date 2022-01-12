import {Component, HostBinding, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {menuOptions} from "../main-nav/menu-options";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menus = menuOptions;
  constructor() { }

  ngOnInit(): void {
  }

}
