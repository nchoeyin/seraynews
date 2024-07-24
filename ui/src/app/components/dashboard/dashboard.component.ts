import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule, NgIf,  } from '@angular/common';
import { ThreeColumnsLayoutComponent } from '../../shared/layouts/three-columns-layout/three-columns-layout.component';
import { SpaLayoutComponent } from '../../shared/layouts/spa-layout/spa-layout.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { NewsService } from '../../news.service';
import { Observable, lastValueFrom } from 'rxjs';
import {MatIconModule} from '@angular/material/icon';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { SpinnerComponent } from '../../shared/spinner/spinner/spinner.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, NgIf, ThreeColumnsLayoutComponent, SpaLayoutComponent, MatButtonModule, MatCardModule, MatIconModule, CommonModule, HttpClientModule, ClipboardModule, SpinnerComponent],
  template: `
    <section class="flex justify-center h-[100vh] w-[100vw] bg-[#e3eff0] overflow-auto">
      <section class="flex flex-col w-7/12 min-h-screen h-full">
        <app-navbar></app-navbar>
        <section class="flex flex-grow mt-3 w-full h-full">
        <!-- [#e3eff0] -->
          <section class="w-full h-full flex flex-col justify-center items-center gap-3">
            <div *ngIf="this.NewsSRV.isLoading" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div class="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
            </div>
            <!-- <app-spinner [isLoading]="this.isLoading"></app-spinner> -->
            <!-- <button class="bg-[#0f3438] hover:bg-[#3f686c] flex gap-3 items-center justify-center h-22 p-4 text-3xl border text-white rounded-lg" (click)="this.toggleLoading()">Toggle Loading</button> -->
            <ng-container *ngIf="isEnabledNews; else landingPage">
              <ng-container *ngTemplateOutlet="NewsPage"></ng-container>
            </ng-container>

            <ng-template #landingPage>
              <section class="flex flex-col w-10/12  rounded-lg gap-2 justify-center">
                  <section class="flex flex-col">
                    <p class="text-4xl basis-3/4 w-full font-bold text-[#23565b]">Get your latest Tibetan news on one click here!</p>
                    <p class="w-full basis-1/4"></p>
                  </section>
                  <section class="flex justify-between items-center my-5">
                    <p class="text-4xl text-[#666]">Tibetan news</p>
                    <button (click)="getTibetanNews(); this.toggleLoading(); isEnabledNews = !isEnabledNews;" class="bg-[#0f3438] hover:bg-gradient-to-r from-[#3f686c] to-[#0f3438] p-2 border rounded-lg">
                      <span class="text-3xl text-white">Click here for news</span>
                    </button>
                  </section>
                  <p class="text-3xl pt-2 text-[#666]">Get Tibetan news on one click on your phone!</p>
                  <p class="text-3xl text-[#666]">{{welcomeText}}</p>
                </section>
            </ng-template>

            <ng-template #NewsPage>
              <!-- <app-spinner></app-spinner> -->
              <section class="w-10/12 h-full flex flex-col gap-2">
                <section class="flex justify-between">
                  <p class="text-3xl flex items-center">The tibetan news for today: </p>
                  <section class="flex gap-3">
                    <button (click)="copyMessage(this.news)" class="bg-[#0f3438] hover:bg-[#3f686c] flex gap-3 items-center p-3 justify-center border rounded-lg">
                      <span class="text-2xl text-white">copy</span>
                      <mat-icon aria-hidden="false" class="scale-100 text-white">file_copy</mat-icon>
                    </button>
                    <button (click)="copyNews()" class="bg-[#0f3438] hover:bg-[#3f686c] flex gap-3 items-center p-3 border rounded-lg">
                      <span class="text-2xl text-white">Download</span>
                      <mat-icon aria-hidden="false" class="scale-100 text-white">save_alt</mat-icon>
                    </button>
                  </section>
                </section>
                <!-- <p>{{this.posts | json}}</p> -->
                <div class="bg-white w-full h-full border border-gray-200 rounded-lg m-2">
                <div  class="flex gap-1 items-center" *ngFor="let news of this.NewsSRV.current_news; let i = index">
                  <!-- <span class="font-md text-xl">{{i+1}}.</span> -->
                  <p class="font-lg text-4xl px-3 mt-2">{{news}}</p>
                </div>
                </div>
              </section>
            </ng-template>
          </section>
        </section>
        <app-footer></app-footer>  
    </section>
  </section>
  `,
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  title = 'tibnewsapp';
  isEnabledNews:boolean = false;
  news:any;

  welcomeText = `Welcome to the portal for Tibetan news! The only place to get the latest Tibetan news`;

  // isLoading = false;
  toggleLoading() {
    this.NewsSRV.isLoading = !this.NewsSRV.isLoading;
  }

  constructor(public NewsSRV : NewsService){
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // this.news = this.NewsSRV.news_list;
    // console.log('news in the constructor')
    // console.log(this.news)
  }

  copyNews(){
    const newsBKP = this.news;
  }
  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
  sendToWhatsapp(){}
  // getTibetanNews(){
  //   this.NewsSRV.getnews().subscribe(
  //     data => this.posts = data,  
  //     error => console.log(error),
  //   )
  //   // if(this.isLoading == true ){
  //   //   this.toggleLoading();
  //   // }
  // }
  getTibetanNews(){
    // this.NewsSRV.getnews().subscribe(
    //   data => this.posts = data,  
    //   error => console.log(error),
    // )
    try{
      this.NewsSRV.getnews().catch((err: any) => console.error(err),)
    }
    catch{
      console.error('failed to get news');
    }
  }
}
