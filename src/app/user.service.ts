import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
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
    return this.http.get<{ data: DetailedUser }>(`${this.usersUrl}/${id}`).pipe(
      map((response) => response.data),
      catchError(this.handleError<DetailedUser>(`getUser id=${id}`)),
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
