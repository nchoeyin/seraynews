import { Component } from '@angular/core';

@Component({
  selector: 'app-spa-layout',
  standalone: true,
  imports: [],
  template: `
  <section class="grid grid-rows-[0.4fr_1fr_0.4fr]">
    <section>
       <ng-container></ng-container>
    </section>
    <section>
       <ng-container></ng-container>
    </section>
    <section>
      <ng-container></ng-container>
    </section>
</section>
  `,
  styleUrl: './spa-layout.component.scss'
})
export class SpaLayoutComponent {

}
