import {Component, HostBinding, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menus = [
    {
      name: 'Academics',
      route: ['', 'summary', 'loans'],
      description: 'View summary of loans by time and members',
      icon: 'academics'
    },
    {
      name: 'Teachers & Students',
      route: ['', 'summary',  'contributions'],
      description: 'View summary of contributions by time and members',
      icon: 'teaching'
    },
    {
      name: 'Finance Management',
      route: ['', 'summary',  'fines'],
      description: 'View summary of fines by time or members',
      icon: 'finance'
    },
    {
      name: 'Hostel & Transport',
      route: ['', 'summary',  'expenses'],
      description: 'View summary of expenses by time or members',
      icon: 'school-bus'
    },
    {
      name: 'Digital Learning',
      route: ['', 'summary',  'loan-queue'],
      description: 'View list of members who are waiting to get loan',
      icon: 'digital-learning'
    },
    {
      name: 'Payroll',
      route: ['', 'summary',  'export'],
      description: 'Export data in excel format for sharing with other members',
      icon: 'summary'
    },
    //
    // {
    //   name: 'Adjustments',
    //   route: ['', 'summary',  'adjustments'],
    //   description: 'Summary of adjustments performed in accounts',
    //   image: 'adjustment.png'
    // },
    // {
    //   name: 'Cash Transfers',
    //   route: ['', 'summary', 'cash-transfers'],
    //   description: 'Summary of cash transfers from one account to another',
    //   image: 'money-transfer.png'
    // },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
