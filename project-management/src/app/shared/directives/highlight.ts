import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onEnter() {
    this.el.nativeElement.style.backgroundColor = '#f8fafc';
    this.el.nativeElement.style.borderLeft = '4px solid #3b82f6';
  }

  @HostListener('mouseleave')
  onLeave() {
    this.el.nativeElement.style.backgroundColor = '';
    this.el.nativeElement.style.borderLeft = '';
  }
}