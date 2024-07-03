import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class DoctorsService {
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
  getDoctorByID(id: any): Observable<any> {
    return this.HttpClient.get<any>(
      `http://graduationbroject.runasp.net/api/Doctor/GetDoctorById?id=${id}`,

      {
        headers: this.httpOption,
      }
    );
  }
  createDoctor(body: any): Observable<any> {
    return this.HttpClient.post(
      'http://graduationbroject.runasp.net/api/Doctor/AddDoctor',
      body,
      { headers: this.httpOption }
    );
  }
  updateDoctor(id: any, imageId: any, body: any): Observable<any> {
    return this.HttpClient.put<any>(
      `http://graduationbroject.runasp.net/api/Doctor/UpdateDoctor?id=${id}&ImageId=${imageId}`,

      body,
      {
        headers: this.httpOption,
      }
    );
  }
  delete(id: any): Observable<any> {
    return this.HttpClient.delete(
      `http://graduationbroject.runasp.net/api/Doctor/DeleteDoctor?id=${id}`,
      { headers: this.httpOption }
    );
  }
}
