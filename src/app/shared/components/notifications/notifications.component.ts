import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  @Input() notifications = [];
  @Input() total = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
