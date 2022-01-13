import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActionButton } from './action-button.model';
import {
  fadeIn,
  fadeSmooth,
  ROUTE_ANIMATIONS_ELEMENTS,
} from '../../animations/router-animation';

@Component({
  selector: 'app-full-data-table',
  templateUrl: './full-data-table.component.html',
  styleUrls: ['./full-data-table.component.scss'],
  animations: [fadeSmooth, fadeIn],
})
export class FullDataTableComponent implements OnInit, OnChanges, AfterViewInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  /** Table Inputs */
  @Input()
  tableList: any[] | null = [];
  @Input()
  permissions: any = {};
  @Input()
  tableConfigurations: {
    tableColumns: Array<{ name: string; label: string; type?: string, align?: string }>;
    tableCaption?: string;
    allowPagination?: boolean;
    allowDataEdition?: boolean;
    tableNotifications?: any;
    actionIcons: any;
    doneLoading?: any;
    deleting?: any;
    showSearch?: boolean;
    showBorder?: boolean;
    showNumbers?: boolean;
    empty_msg?: string;
    customPrimaryMessage?: string;
    useFullObject?: boolean;
    active?: any;
    error?: any;
    loading?: any;
    hideExport?: any;
  } = {
      tableColumns: [],
      tableCaption: '',
      allowPagination: true,
      allowDataEdition: false,
      tableNotifications: null,
      actionIcons: {
        edit: false,
        delete: false,
        more: false,
        customPrimary: false,
      },
      doneLoading: false,
      deleting: {},
      active: {},
      error: {},
      loading: {},
      showSearch: true,
      showBorder: true,
      showNumbers: false,
      empty_msg: 'No Data',
      customPrimaryMessage: '',
      useFullObject: false,
    };
  @Input()
  loading: boolean | null = false;
  @Input()
  searchFieldControl: FormControl;
  edit: string = '';

  /** Table Events */
  @Output()
  rowCustomPrimary: EventEmitter<any> = new EventEmitter();
  @Output()
  rowUpdate: EventEmitter<any> = new EventEmitter();
  @Output()
  rowDownload: EventEmitter<any> = new EventEmitter();
  @Output()
  rowDelete: EventEmitter<any> = new EventEmitter();
  @Output()
  rowPreview: EventEmitter<any> = new EventEmitter();
  @Output()
  rowPrint: EventEmitter<any> = new EventEmitter();

  @Output()
  customAction: EventEmitter<any> = new EventEmitter();

  @Input()
  loadingMessage: string = '';

  @Input() legends: any[] = [];

  @Input() showLegends = false;

  // list of all the added buttons that you want to deal with separately
  @Input() actionButtons: ActionButton[] = [];

  /** list of fields that are searchable */
  searchFields: string = '';
  showDelete: any = {};
  showDownload: any = {};

  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [];
  showButtonConfirm: any = {};
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  csvData!: any[];
  dummyItems = [];
  constructor() {
    this.searchFieldControl = new FormControl('');
    // this.searchFieldControl.valueChanges.subscribe(v => console.log({ v }));
    if (this.tableConfigurations) {
      this.tableConfigurations.showSearch =
        this.tableConfigurations.showSearch !== null
          ? this.tableConfigurations.showSearch
          : true;
      this.tableConfigurations.allowPagination =
        this.tableConfigurations.allowPagination !== null
          ? this.tableConfigurations.allowPagination
          : true;
      this.tableConfigurations.showBorder =
        this.tableConfigurations.showBorder !== null
          ? this.tableConfigurations.showBorder
          : false;
      this.searchFields = this.tableConfigurations.tableColumns
        .map((column) => column.name)
        .join(',');
      this.tableConfigurations.actionIcons = this.tableConfigurations
        .actionIcons
        ? this.tableConfigurations.actionIcons
        : {
          edit: false,
          delete: false,
          download: false,
          more: false,
          print: false,
          cancel: false,
          customPrimary: false,
        };
      this.tableConfigurations.active = this.tableConfigurations.active
        ? this.tableConfigurations.active
        : {};
    } else {
      this.tableConfigurations = {
        tableColumns: [],
        tableCaption: '',
        allowPagination: true,
        allowDataEdition: false,
        tableNotifications: null,
        actionIcons: {
          edit: false,
          delete: false,
          more: false,
          customPrimary: false,
        },
        doneLoading: false,
        deleting: {},
        active: {},
        error: {},
        loading: {},
        showSearch: true,
        showBorder: true,
        showNumbers: false,
        empty_msg: 'No Data',
        customPrimaryMessage: '',
        useFullObject: false,
      };
      this.tableConfigurations.showSearch = true;
      this.tableConfigurations.allowPagination = true;
      this.tableConfigurations.showBorder = false;
      this.tableConfigurations.actionIcons = {
        edit: false,
        delete: false,
        more: false,
        download: false,
        print: false,
        cancel: false,
        customPrimary: false,
      };
    }
  }

  ngOnInit() {
    this.downloadToCsv();
  }

  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.value.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.tableList!);
    const {
      edit,
      print,
      more,
      cancel,
      download,
      customPrimary,
    } = this.tableConfigurations.actionIcons;
    let colums = [];
    if (this.tableConfigurations.showNumbers) {
      colums = [
        'position',
        ...this.tableConfigurations.tableColumns.map((column) => column.name),
      ];
    } else {
      colums = [
        ...this.tableConfigurations.tableColumns.map((column) => column.name),
      ];
    }
    if (
      edit ||
      print ||
      download ||
      more ||
      cancel ||
      customPrimary ||
      this.tableConfigurations.actionIcons.delete ||
      this.actionButtons.length > 0
    ) {
      this.displayedColumns = [...colums, 'actions'];
    } else {
      this.displayedColumns = colums;
    }
    if (this.tableConfigurations.allowPagination) {
      this.dataSource.paginator = this.paginator;
    }
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  viewItemDetails(item: any) {
    if (this.tableConfigurations.useFullObject) {
      this.rowPreview.emit(item);
    } else {
      this.rowPreview.emit(item.id);
    }
  }

  getRecord(column: any, item: any) {
    console.log(item);
    this.edit = column;
  }
  onSave(element: any) {
    this.edit = '';
    // console.log(element);
  }
  arrayOne(n: number): any[] {
    return Array(n);
  }
  editItem(item: any) {
    if (this.tableConfigurations.useFullObject) {
      this.rowUpdate.emit(item);
    } else {
      this.rowUpdate.emit(item.id);
    }
  }

  printItem(itemId: any) {
    this.rowPrint.emit(itemId);
  }

  deleteItem(item: any) {
    if (this.tableConfigurations.useFullObject) {
      this.rowDelete.emit(item);
      this.showDelete = {};
    } else {
      this.rowDelete.emit(item.id);
      this.showDelete = {};
    }
  }

  customPrimaryItem(item: any) {
    if (this.tableConfigurations.useFullObject) {
      this.rowCustomPrimary.emit(item);
    } else {
      this.rowCustomPrimary.emit(item.id);
    }
  }

  downloadItem(item: any) {
    this.rowDownload.emit(item);
  }

  trackByFn(index: any, item: any) {
    return item ? item.id : undefined;
  }

  submitCustomButtom(button: ActionButton, item: any, step: any) {
    const action = button.action;
    this.showButtonConfirm = {};
    if (step === 'first' && button.confirm_first) {
      this.showButtonConfirm[button.id + item.id] = true;
    } else {
      if (this.tableConfigurations.useFullObject) {
        this.customAction.emit({ action, value: item });
      } else {
        this.customAction.emit({ action, value: item.id });
      }
    }
  }

  downloadToCsv() {
    const data = this.tableList!.map(item => {
      const object: any = {};
      for (const col of this.tableConfigurations.tableColumns) {
        object[col.name] = item[col.name] ? item[col.name] : '';
      }
      return object;
    });
    this.csvData = data;

    // const csvFile = new ngxCsv(data, 'My Report', {
    //   headers: this.tableConfigurations.tableColumns.map(col => col.label)
    // });
  }
}
