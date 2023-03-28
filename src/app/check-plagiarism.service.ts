import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = 'http://127.0.0.1:5000/check-plagiarism';

@Injectable({
  providedIn: 'root'
})
export class CheckPlagiarismService {
  httpClient: any;

  constructor() { }

  checkPlagiarism(paramValue: String): Observable<String>{
    let body = {search_term: paramValue}
    return this.httpClient.post(apiUrl, body).pipe()
  }
}
