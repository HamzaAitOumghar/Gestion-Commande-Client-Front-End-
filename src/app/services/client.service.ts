import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../entities/client';

@Injectable()
export class ClientService {

  url = "http://localhost:8080/clients";

  constructor(private http:HttpClient) {
   }


   public getAllClients(){
     return this.http.get(this.url);
   }

   public saveClient(c:Client){
    return this.http.post(this.url,c);
   }

   public deleteClient(id:number){
     return this.http.delete(this.url+"/"+id);
   }

   public getClientById(id){
     return this.http.get(this.url+"/"+id);
   }

}



