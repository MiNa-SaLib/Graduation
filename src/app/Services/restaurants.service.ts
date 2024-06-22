import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  httpOption;
  constructor(private http: HttpClient) {
    this.httpOption = new HttpHeaders({
      'Content-Type': 'multipart/form-data',
      // 'Authorization': 'Bearer ' + localStorage.getItem('token')
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiTmFkYTIwIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiI3MDk3ZWQ2Ni0zNTc2LTRiZTMtODJlMC00YzZjNzllZjkzZTciLCJqdGkiOiI2YWU5NWQzZS0yOWI0LTQwZDUtODc4My1jYzlmMWIyMjI3NjQiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTcyMTY0NDU2NiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo0NDMyMi8iLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjQyMDAwLyJ9.KhfWbG8AYnidtse-aOD0rqrMJM3grS-cjxM5SKzqacE',
    });
  }
  getAllRestaurants(): Observable<any> {
    return this.http.get<any>(
      'http://graduationbroject.runasp.net/api/Restaurant/GetAllRestaurants',
      {
        headers: this.httpOption,
      }
    );
  }
  createRestaurants(data: any): Observable<any> {
    return this.http.post<any>(
      'http://graduationbroject.runasp.net/api/Restaurant/CreateRestaurant',
      data,
      {
        headers: this.httpOption,
      }
    );
  }
}
