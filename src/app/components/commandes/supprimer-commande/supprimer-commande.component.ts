import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Commande } from '../../../entities/commande';
import { CommandeService } from '../../../services/commande.service';
import { NgxSpinnerService } from 'ngx-spinner';

declare var jQuery:any;

@Component({
  selector: 'app-supprimer-commande',
  templateUrl: './supprimer-commande.component.html',
  styleUrls: ['./supprimer-commande.component.css']
})
export class SupprimerCommandeComponent implements OnInit {

  @Input() commande:Commande;
  @Output() refrech: EventEmitter<any> = new EventEmitter();
  @ViewChild('fileInput') fileInput:ElementRef;

  messageError=false;

  
  constructor(private commandeService:CommandeService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  supprimerCommande(){
    this.spinner.show();
    this.commandeService.deleteCommande(this.commande.id).subscribe(
      (resp)=>{
        this.spinner.hide();
        this.refrech.emit();
        jQuery("#supprimerCommande").modal("hide");
      },
      (err)=>{
        this.messageError=true;
        this.spinner.hide();
      }
    );
  }

}
