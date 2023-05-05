import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  Registration(regForm: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  register(users:any): any {
    return this.http.post('/registration',users);
  }

}
