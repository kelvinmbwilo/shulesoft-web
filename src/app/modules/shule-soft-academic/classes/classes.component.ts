import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import { ApplicationState } from 'src/app/store';
import {ActionButton} from "../../../shared/components/full-data-table/action-button.model";

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  viewDetails: boolean = false;
  viewDetailsTitle = '';
  tableConfigurations = {
    tableColumns: [
      { name: 'class', label: 'Class' },
      { name: 'classNumeric', label: 'Class Numeric', type: 'number' },
      { name: 'teacherName', label: 'Teacher Name' },
      { name: 'student', label: 'Student' },
      { name: 'note', label: 'Note' },
    ],
    tableCaption: '',
    tableNotifications: '',
    showSearch: true,
    useFullObject: true,
    showBorder: true,
    allowPagination: true,
    actionIcons: {
      edit: true,
      delete: true,
      more: true,
      print: false,
      customPrimary: false,
    },
    doneLoading: false,
    deleting: {},
    active: {},
    hideExport: false,
    customPrimaryMessage: 'Activate',
    empty_msg: 'No Classes Defined',
  };
  viewType = '';
  classes: any[] = [
    { class: 'Grade One', classNumeric: '1000000', teacherName: 'Lucy Obutu', student: '2', note: '', actionIcons: {edit: false} },
    { class: 'Grade Two', classNumeric: '2', teacherName: 'Faraje Elisha', student: '24', note: '', },
    { class: 'Grade Three', classNumeric: '3', teacherName: 'Anold Jonals Kelvin', student: '22', note: '', },
    { class: 'Grade Four', classNumeric: '4', teacherName: 'Agnes Samson Salum', student: '24', note: '', },
    { class: 'Grade Five', classNumeric: '5', teacherName: 'Richard Charles', student: '23', note: '', },
    { class: 'Grade Six', classNumeric: '6', teacherName: 'Paul Gosbert', student: '21', note: '', },
    { class: 'Grade Seven', classNumeric: '7', teacherName: 'Faith Kalembo', student: '21', note: '', },
  ];

  buttons: ActionButton[] = [
    {
      id: 'enable',
      label: 'Enable',
      title: 'Enable User',
      class: 'btn btn-clear btn-sm',
      icon: '',
      action: 'enable'
    },
    {
      id: 'disable',
      label: 'Disable',
      title: 'Disable User',
      class: 'btn btn-clear btn-sm',
      icon: '',
      action: 'disable'
    },
    {
      id: 'changePassword',
      label: 'Change Password',
      title: 'Change Password',
      class: 'btn btn-clear btn-sm',
      icon: '',
      action: 'changePassword'
    },
  ];
  // @ts-ignore
  constructor(
    private store: Store<ApplicationState>,
  ) { }

  ngOnInit(): void {
  }

  onAdd() {
    this.viewDetails = true;
    this.viewDetailsTitle = 'Add New Class'
    this.viewType = 'add';
  }

  closeDetails(shouldUpdate = false) {
    this.viewDetails = false;
    this.viewDetailsTitle = ''
    this.viewType = '';
  }

  viewItem(event: any) { }

  updateItem(event: any) {
    this.viewDetails = true;
    this.viewDetailsTitle = `Update Class (${event.chainName})`
    this.viewType = 'add';
  }

  async delete(event: any) {}
}
