import {Directive, ElementRef, Output, EventEmitter, HostListener} from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {

  constructor(private _element_ref: ElementRef) {
  }

  @Output() public clickOutside = new EventEmitter();
  @HostListener('document:click', ['$event.target']) public onClick(targetElement: any) {
    const clickedInside = this._element_ref.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(true);
    }
  }

}
