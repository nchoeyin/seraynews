import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable, lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  isLoading = false;
  current_news = []
  // private url = 'https://jsonplaceholder.typicode.com/posts'
  private tibetan_news_url = 'http://localhost:8000/tibetan_news/';
  constructor(private http : HttpClient) { }
  // getPosts():Observable<any[]>{
  //   return this.http.get<any[]>(this.url); //this returns an observable of type any[] which represents an array of JSON objects
  // }
  // getnews():Observable<any[]>{
  //   return this.http.get<any[]>(this.tibetan_news_url); //this returns an observable of type any[] which represents an array of JSON objects
  // }
  async getnews():Promise<void>{
    try {
      const resp: any = await lastValueFrom(this.http.get(this.tibetan_news_url)); //this returns an observable of type any[] which represents an array of JSON objects
      // console.log(`resp : ${resp}`);
      console.log(`resp :`);
      console.log(resp);
      if (resp.status == 200){
        this.isLoading = false;
      }
      this.current_news = resp.news;
      console.log(this.current_news);
    }
    catch(err: any) {
      this.isLoading = false;
    }
  }
}
