import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface User {
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  // Define the API endpoint
  private apiUrl = `${environment.baseUrl}/api/create-task`; 
  constructor(private http: HttpClient) { }

  // Method to create a new user
  createUser(user: User): Observable<any> {
    // Set the headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Send POST request to the API
    return this.http.post<any>(this.apiUrl, user, { headers });
  }
}
