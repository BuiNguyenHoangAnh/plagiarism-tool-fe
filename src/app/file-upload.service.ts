import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  httpClient: any;

  constructor() { }

  postFile(fileToUpload: File): Observable<boolean> {
    const endpoint = 'your-destination-url';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.httpClient
      .post(endpoint, formData)
      .map(() => { return true; })
      // .catch((e) => this.handleError(e));
}
}
