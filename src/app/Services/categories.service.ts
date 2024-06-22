import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}
  // method(): Observable<[]> {
  //   return this.http.get<[]>('http://localhost:3000/categories');
  // }
}
