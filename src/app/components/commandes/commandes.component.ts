import { Component, OnInit } from '@angular/core';
import { Commande } from '../../entities/commande';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {

  commandes = [{
    "id": "1",
    "numero":"5456",
    "dateCommande":"2001-10-12",
    "datePaiment":"2001-12-12",
    "dateLivraison":"2002-01-12"
  },
  {
    "id": "2",
    "numero":"6456",
    "dateCommande":"2009-10-12",
    "datePaiment":"2009-12-12",
    "dateLivraison":"2010-01-12"
  },
  {
    "id": "3",
    "numero":"1456",
    "dateCommande":"2007-10-12",
    "datePaiment":"2007-12-12",
    "dateLivraison":"2008-01-12"
  },
  {
    "id": "4",
    "numero":"8656",
    "dateCommande":"2010-10-12",
    "datePaiment":"2010-12-12",
    "dateLivraison":"2011-01-12"
  }
  ];

  constructor() { }

  ngOnInit() {
  }

}
