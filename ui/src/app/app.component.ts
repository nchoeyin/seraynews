import { Component } from "@angular/core";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent, RouterOutlet],
  template: `
  <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
