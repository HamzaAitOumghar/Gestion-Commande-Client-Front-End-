import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommandeService } from '../../../services/commande.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-ajouter-commande',
  templateUrl: './ajouter-commande.component.html',
  styleUrls: ['./ajouter-commande.component.css']
})
export class AjouterCommandeComponent implements OnInit {

  form:FormGroup;
  messageAdded=false;
  messageError=false;

  constructor(private commandeService:CommandeService,private spinner: NgxSpinnerService) { 
    this.form=new FormGroup({
      numero : new FormControl('',Validators.required),
      dateCommande : new FormControl('',Validators.required),
      datePaiment : new FormControl('',Validators.required),
      dateLivraison : new FormControl('',Validators.required)
    });
  }

  ngOnInit() {
  }
  addCommande(){
    this.spinner.show();
    this.commandeService.saveCommande(this.form.value).subscribe(
      (resp:any)=>{
        this.messageAdded = true;
        this.messageError = false;
        this.form.reset();
        this.spinner.hide();
      },
      (err)=>{
        this.messageAdded = false;
        this.messageError = true;
        this.spinner.hide();

      }
    );


  }

}
