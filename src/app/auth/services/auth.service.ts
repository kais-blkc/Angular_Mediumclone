import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from '../share/types/registerRequest.interface';
import { Observable, map } from 'rxjs';
import { CurrentUserInterface } from '../../share/types/currentUser.interface';
import { environment } from '../../../environments/environment.development';
import { AuthResponseInterface } from '../share/types/authResponse.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }
  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users';

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((response: AuthResponseInterface) => response.user));
  }
}
