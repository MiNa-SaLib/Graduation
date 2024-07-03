import { isPlatformBrowser } from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';

import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  httpOption;
  isBrowser: boolean;
  constructor(
    private HttpClient: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.httpOption = new HttpHeaders({
        // 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
        // Authorization:
        //   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiTmFkYTIwIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiI3MDk3ZWQ2Ni0zNTc2LTRiZTMtODJlMC00YzZjNzllZjkzZTciLCJqdGkiOiI2YWU5NWQzZS0yOWI0LTQwZDUtODc4My1jYzlmMWIyMjI3NjQiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTcyMTY0NDU2NiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo0NDMyMi8iLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjQyMDAwLyJ9.KhfWbG8AYnidtse-aOD0rqrMJM3grS-cjxM5SKzqacE',
      });
    }
  }
  getAllDoctors(): Observable<any> {
    return this.HttpClient.get<any>(
      'http://graduationbroject.runasp.net/api/Doctor/GetAllDoctors',
      { headers: this.httpOption }
    );
  }
  getAllRestaurants(): Observable<any> {
    return this.HttpClient.get<any>(
      'http://graduationbroject.runasp.net/api/Restaurant/GetAllRestaurants',
      {
        headers: this.httpOption,
      }
    );
  }
  getAllPlayStations(): Observable<any> {
    return this.HttpClient.get<any>(
      'http://graduationbroject.runasp.net/api/PlayStation/GetAllPlayStations',
      {
        headers: this.httpOption,
      }
    );
  }
  getuser(): Observable<any> {
    return this.HttpClient.get<any>(
      'http://graduationbroject.runasp.net/api/Account/ShowUser',
      {
        headers: this.httpOption,
      }
    );
  }
}
