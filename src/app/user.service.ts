import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DetailedUser } from './detailed-user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
  };

  private usersUrl = 'https://reddit-eu.herokuapp.com/api/users';

  constructor(private http: HttpClient) {}

  getUser(id: number): Observable<DetailedUser> {
    return this.http
      .get<{ data: DetailedUser }>(`${this.usersUrl}/${id}`)
      .pipe(map((response) => response.data));
  }
}
