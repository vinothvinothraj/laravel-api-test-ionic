import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiftcardsService {
  
  private baseUrl = environment.baseUrl;
  private apiUrl = `${environment.baseUrl}/api/gift-cards`; 

  constructor(private http: HttpClient) {}

  getGiftCards(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getGiftCardById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  generateGiftCardPDF(id: string) {
    return this.http.get(`${this.baseUrl}/api/generate-giftcard-pdf/${id}`, {
      responseType: 'blob',  
    });
  }
}
