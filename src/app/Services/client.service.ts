import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../Models/Client';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  url = 'http://127.0.0.1:8000/';


  getClient() {
    return this.http.get<Client[]>(this.url + 'client');
  }

  addClient(client: Client){
    
    return this.http.post<Client>(this.url + 'client/',client);
  }
}
