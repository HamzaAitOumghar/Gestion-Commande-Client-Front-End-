import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { CommandeService } from '../../../services/commande.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Commande } from '../../../entities/commande';

@Component({
  selector: 'app-modifier-commande',
  templateUrl: './modifier-commande.component.html',
  styleUrls: ['./modifier-commande.component.css']
})
export class ModifierCommandeComponent implements OnInit {

  @Input() commande:Commande;
  @Output() refrech: EventEmitter<any> = new EventEmitter();


  form:FormGroup;
  Added=false;
  Error=false;

  constructor(private commandeService:CommandeService,private spinner: NgxSpinnerService) { 
  }

  ngOnChanges(){
    this.form=new FormGroup({
      numero : new FormControl(this.commande.numero,Validators.required),
      dateCommande : new FormControl(this.commande.dateCommande,Validators.required),
      datePaiment : new FormControl(this.commande.datePaiment,Validators.required),
      dateLivraison : new FormControl(this.commande.dateLivraison,Validators.required)
    });
  }

  ngOnInit() {
  }

  modifierCommande(){


    this.spinner.show();
    this.commandeService.modifierCommande(this.commande.id,this.form.value).subscribe(
      (resp)=>{
        this.spinner.hide()
        this.Added=true;
        this.Error=false;
        this.refrech.emit();
      },
      (err)=>{
        this.spinner.hide()
        this.Added=false;
        this.Error=true;
      }
    );

  }

}
