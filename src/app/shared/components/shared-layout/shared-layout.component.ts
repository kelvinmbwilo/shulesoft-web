import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { formSize, tableSize } from '../../animations/router-animation';

@Component({
  selector: 'app-shared-layout',
  templateUrl: './shared-layout.component.html',
  styleUrls: ['./shared-layout.component.scss'],
  animations: [
    formSize, tableSize
  ]
})
export class SharedLayoutComponent implements OnInit {

  @Input() Analysis: string = '';
  @Input() subtitle: string = '';
  @Input() loading = false;
  @Input() formTitle: string = '';
  @Input() addPermission: string[] = [];
  @Input() helpText: string = '';
  @Input() showHelp = true;
  @Input() menus = [];

  @Input() viewDetails = false;
  @Input() hideAdd = false;
  @Input() smallForm = true;
  @Input() hideBreadcrumb = false;

  @Output() addItem = new EventEmitter();
  @Output() closeDetails = new EventEmitter();
  @Input() animationSize: 'eighty' | 'sixty' | 'largeForm' | 'full' = 'sixty';
  @Input() image: any;
  constructor() { }

  ngOnInit() {
  }


  closeForm() {
    this.closeDetails.emit();
  }

  add() {
    this.addItem.emit();
  }

}
