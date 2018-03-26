import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap, map } from 'rxjs/operators';
import { empty } from 'rxjs/observable/empty';

export interface IPost {
  userId: string;
  id: number;
  title: string;
  body: string;
}

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<IPost[]> {
    /*
    let headers = new HttpHeaders();
    headers = headers.set('my-header', '123');
    const options: Object = {
      headers,
      responseType: 'text' as 'text',
      observe: 'response' as 'response'
    };
    return this.http.get<HttpResponse<string>>(
      'https://jsonplaceholder.typicode.com/posts', options
    )
      .pipe(
        tap(res => console.log(res.headers.keys())),
        map(res => JSON.parse(res.body))
      );
    */
    // let headers = new HttpHeaders();
    // headers = headers.set('my-header', '123');
    // const options: Object = {
    //   headers
    // };
    // return this.http.get<IPost[]>(
    //   'https://jsonplaceholder.typicode.com/posts', options
    // );
    return empty();
  }
}
