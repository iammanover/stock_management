import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  loginUrl: string;

  constructor(private http: HttpClient) {
    this.loginUrl = '';
  }
  login(username: string, password: string) {
    return this.http.post<any>(this.loginUrl, { username, password }).pipe(
      map((token) => {
        localStorage.setItem('blog-token', token.access_token);
        return token;
      })
    )
  }
}
