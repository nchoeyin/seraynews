import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [NgIf],
  template: `
  <div *ngIf="isLoading" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
  </div>
  `,
  styleUrl: './spinner.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SpinnerComponent {
  constructor() {}
  @Input() isLoading!: boolean;
}

