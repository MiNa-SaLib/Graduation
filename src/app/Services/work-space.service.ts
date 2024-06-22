import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkSpaceService {
  httpOption;
  constructor(private http: HttpClient) {
    this.httpOption = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer ' + localStorage.getItem('token')
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibW9vbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiNzM0NGEwMWItN2VlMi00ZjQ0LWIxYWQtODY4ZjBkNDhjOTFjIiwianRpIjoiZmQzYmM1MjMtNjA0Yy00NGFjLWFjYTUtNzllYjljMzcyZjI1IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiVXNlciIsImV4cCI6MTcyMTQ4MzA3MywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo0NDMyMi8iLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjQyMDAwLyJ9.2SCX5U8tb4N27coZ0vinT4UJG2bphkwIsTSg-hFJO8w',
    });
  }
  getAllWorkSpace(): Observable<any> {
    return this.http.get<any>(
      'http://graduationbroject.runasp.net/api/Workspace/GetAllWorkspaces',
      {
        headers: this.httpOption,
      }
    );
  }
}
