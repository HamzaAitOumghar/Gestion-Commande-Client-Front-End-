import { Component, OnInit } from '@angular/core';
import { Commande } from '../../entities/commande';
import { CommandeService } from '../../services/commande.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {

  commandes : Commande[]=[];
  commandeAmodifier:Commande;
  constructor(private commandeService:CommandeService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.commandeService.getAllCommandes().subscribe(
      (resp:any)=>{
        this.commandes=resp;
        this.spinner.hide();
      },
      (err)=>{
        console.log(err);
        
      }
    );
  }
  onRefrech($event){
    this.ngOnInit();
  }

  affecatationCommande(cmd){
    this.commandeAmodifier=cmd;
  }
}
