import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Post } from './post';
import { DetailedPost } from './detailed-post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
  };

  private postsUrl = 'https://reddit-eu.herokuapp.com/api/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http
      .get<{ data: Post[] }>(this.postsUrl)
      .pipe(map((response) => response.data));
  }

  getPost(id: number): Observable<{ data: DetailedPost }> {
    return this.http.get<{ data: DetailedPost }>(`${this.postsUrl}/${id}`);
  }
}
