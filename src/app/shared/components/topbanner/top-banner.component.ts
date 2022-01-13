import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { fadeIn, ROUTE_ANIMATIONS_ELEMENTS } from '../../animations/router-animation';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss'],
  animations: [fadeIn]
})
export class TopBannerComponent implements OnInit {
  @Input() title = '';
  @Input() image = '';
  @Input() url = '';
  @Input() showHelp = false;
  @Input() hideAdd = true;
  @Input() viewDetails = false;
  @Input() loading = false;
  @Input() addPermission: string[] = [];
  @Input() menuItems: any[] = [];
  @Output() addClicked = new EventEmitter();
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() { }

  openHelp() {
    this.commonService.showHelp(this.title);
  }

  add() {
    this.addClicked.emit();
  }
}
