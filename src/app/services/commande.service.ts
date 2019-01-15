import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commande } from '../entities/commande';

@Injectable()
export class CommandeService {

  url = "http://localhost:8080/commandes";

  constructor(private http:HttpClient) {
   }


   public getAllCommandes(){
     return this.http.get(this.url);
   }

   public saveCommande(c:Commande){
    return this.http.post(this.url+"/",c);
   }

   public deleteCommande(id:number){
     return this.http.delete(this.url+"/"+id);
   }

   public getCommandeById(id){
     return this.http.get(this.url+"/"+id);
   }
   public modifierCommande(id,commande){
     return this.http.put(this.url+"/"+id,commande);
   }
}
