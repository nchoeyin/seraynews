import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink],
  template: `
    <!-- <section class="w-full h-20 bg-white sticky top-0"> -->
      <section class="bg-[#e3eff0] w-ful h-20 sticky top-0 flex flex-col-1 justify-between items-center p-2 mb-10"> 
      <a href="/">  
        <span class="text-4xl text-[#0f3438] font-semibold">Seray</span>
      </a>
      <a [routerLink]="['/login']">
          <!-- <mat-icon class="text-2xl font-bold">login</mat-icon> -->
          <mat-icon aria-hidden="false" class="scale-150">account_circle</mat-icon>
      </a>
      </section>
    <!-- </section> -->
  `,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
