import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open')
  private isOpen = false;

  constructor() {
  }

  @HostListener('click')
  private toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}
