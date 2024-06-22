import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnalysisCentersService {
  constructor(private http: HttpClient) {}
  getAllAnalysisCenters(): Observable<any> {
    return this.http.get<any>(
      'http://graduationbroject.runasp.net/api/AnalysisCenters/GetAllAnalysisCenters'
    );
  }
}
