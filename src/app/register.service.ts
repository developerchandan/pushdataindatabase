import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
// inject httpClient obj.


  constructor(private hc: HttpClient) { }
  doRegister(userobj): Observable<object> {
    console.log(userobj);

    return this.hc.post('/user/register', userobj);
  }
}
