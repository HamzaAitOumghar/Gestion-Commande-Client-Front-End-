import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients = [
    {
      "id": "1",
      "nom": "anouar",
      "prenom": "da mhand",
      "adresse": "tioghza",
      "ville": "sidi ifni",
      "telephone": "0623422371",
      "email": "anouar@tioghza.fr"
    },
    {
      "id": "1",
      "nom": "anouar",
      "prenom": "da mhand",
      "adresse": "tioghza",
      "ville": "sidi ifni",
      "telephone": "0623422371",
      "email": "anouar@tioghza.fr"
    }, 
    {
      "id": "1",
      "nom": "anouar",
      "prenom": "da mhand",
      "adresse": "tioghza",
      "ville": "sidi ifni",
      "telephone": "0623422371",
      "email": "anouar@tioghza.fr"
    }, 
    {
      "id": "1",
      "nom": "anouar",
      "prenom": "da mhand",
      "adresse": "tioghza",
      "ville": "sidi ifni",
      "telephone": "0623422371",
      "email": "anouar@tioghza.fr"
    },
    {
      "id":"1",
      "nom":"anouar",
      "prenom":"da mhand",
      "adresse":"tioghza",
      "ville":"sidi ifni",
      "telephone":"0623422371",
      "email":"anouar@tioghza.fr"
      },
      {
        "id":"1",
        "nom":"anouar",
        "prenom":"da mhand",
        "adresse":"tioghza",
        "ville":"sidi ifni",
        "telephone":"0623422371",
        "email":"anouar@tioghza.fr"
        },
  ];


  constructor() { }

  ngOnInit() {
  }

}
