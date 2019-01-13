import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commande } from '../entities/commande';
import { Fournisseur } from '../entities/fournisseur';

@Injectable()
export class FournisseurService {

  url = "http://localhost:8080/fournisseur";

  constructor(private http:HttpClient) {
   }


   public getAllFournisseur(){
     return this.http.get(this.url);
   }

   public saveFournisseur(c:Fournisseur){
    return this.http.post(this.url+"/add",c);
   }

   public deleteFournisseur(id:number){
     return this.http.delete(this.url+"/delete/"+id);
   }

   public getFournisseurById(id){
     return this.http.get(this.url+"/"+id);
   }

}
