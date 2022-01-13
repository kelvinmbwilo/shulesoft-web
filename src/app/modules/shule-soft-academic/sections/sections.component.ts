import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {ApplicationState} from "../../../store";

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {
  viewDetails: boolean = false;
  viewDetailsTitle = '';
  tableConfigurations = {
    tableColumns: [
      { name: 'section', label: 'Class' },
      { name: 'category', label: 'Class Numeric' },
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
      more: false,
      print: false,
      customPrimary: false,
    },
    doneLoading: false,
    deleting: {},
    active: {},
    hideExport: false,
    customPrimaryMessage: 'Activate',
    empty_msg: 'No Sections Defined',
  };
  viewType = '';
  classes: any[] = [
    { section: 'A', category: 'A', teacherName: 'Lucy Obutu', student: '2', note: 'Form II section A', },
    { section: 'B', category: 'B', teacherName: 'Faraje Elisha', student: '24', note: 'Form II section B', },
    { section: 'C', category: 'C', teacherName: 'Anold Jonals Kelvin', student: '22', note: 'Form II section C', },
    { section: 'D', category: 'Art', teacherName: 'Agnes Samson Salum', student: '24', note: 'Form II section D', },
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
