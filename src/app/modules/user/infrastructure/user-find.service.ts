import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments/environment';
import { User } from '../domain/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserFindService {

  private readonly API_URL = environment.API_URL

  private readonly httpClient = inject(HttpClient)

  public find(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.API_URL}/user/${id}`)
  }

}
