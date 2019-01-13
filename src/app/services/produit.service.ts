import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produits } from '../entities/produits';

@Injectable()
export class ProduitService {

  url = "http://localhost:8080/produit";

  constructor(private http:HttpClient) {
   }


   public getAllProduit(){
     return this.http.get(this.url);
   }

   public saveProduit(c:Produits){
    return this.http.post(this.url+"/add",c);
   }

   public deleteProduit(id:number){
     return this.http.delete(this.url+"/delete/"+id);
   }

   public getProduitById(id){
     return this.http.get(this.url+"/"+id);
   }
}
