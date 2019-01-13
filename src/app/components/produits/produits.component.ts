import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})

export class ProduitsComponent implements OnInit {

  produits = [
    {
      "id": "1",
      "libelleProduit": "HP PC",
      "prixProduit": "153"
    },
    {
      "id": "1",
      "libelleProduit": "HP PC",
      "prixProduit": "102.2"
    }, 
    {
      "id": "1",
      "libelleProduit": "HP PC",
      "prixProduit": "1078.2"
    },
    {
      "id": "1",
      "libelleProduit": "HP PC",
      "prixProduit": "1012.2"
    },
    {
      "id": "1",
      "libelleProduit": "HP PC",
      "prixProduit": "102.25"
    },
    {
      "id": "1",
      "libelleProduit": "HP PC",
      "prixProduit": "102.25"
    },    
  ];

  constructor() { }

  ngOnInit() {
  }

}
