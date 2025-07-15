import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment, apiName } from '../enviroments'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Review {
  http = inject(HttpClient);
  
  getAllReviews(): Observable<any> {
    return this.http.get(environment.baseUrl + apiName.getAllReviews)
  }

}
