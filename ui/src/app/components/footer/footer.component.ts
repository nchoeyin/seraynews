import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule],
  template: `
  <!-- <section class="w-full absolute inset-x-0 bottom-0 min-height"> -->
  <!-- <section class="w-full h-20"> -->
    <section class="bg-[#e3eff0] flex h-20 w-full flex-col-1 items-center justify-between p-2 mt-20">
      <!-- <span class="text-4xl text-[#0f3438] font-semibold">All rights reserved</span> -->
      <span class="text-2xl text-[#0f3438] font-semibold">Copyright © 2024 Seray Software</span>
      <!-- Copyright © 2024 Seray Software -->
      <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
        <!-- <mat-icon aria-hidden="false" class="scale-150">share</mat-icon> -->
      </button>
    </section>
  <!-- </section> -->
  `,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
