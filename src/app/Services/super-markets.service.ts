import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SuperMarketsService {
  constructor(private http: HttpClient) {}
  getAllSuperMarkets(): Observable<any> {
    return this.http.get<any>(
      'http://graduationbroject.runasp.net/api/SuperMarket/GetAllSuperMarkets'
    );
  }
  public uploadImage(image: File): Observable<Response> {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post<Response>('https://api.imgur.com/3/image', formData);
  }
}
