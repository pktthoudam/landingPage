import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]'
})
export class NumberOnly {

  constructor() { }
  private regex: RegExp = new RegExp(/^[0-9]*$/);

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const allowedKeys = [
      'Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'
    ];

    if (
      allowedKeys.indexOf(event.key) !== -1 ||
      (event.ctrlKey || event.metaKey) && ['a', 'c', 'v', 'x'].includes(event.key.toLowerCase())
    ) {
      return; // Allow control keys
    }

    if (!this.regex.test(event.key)) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    const pastedInput: string = event.clipboardData?.getData('text/plain') || '';
    if (!/^\d+$/.test(pastedInput)) {
      event.preventDefault();
    }
  }
}
