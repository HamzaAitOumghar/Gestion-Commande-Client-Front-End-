import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes} from './app.routing';

import { SidebarModule } from 'ng-sidebar';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommandesComponent } from './components/commandes/commandes.component';
import { DataTableModule} from 'angular2-datatable';
import { ProduitsComponent } from './components/produits/produits.component';
import { ClientsComponent } from './components/clients/clients.component';
import { FournisseurComponent } from './components/fournisseur/fournisseur.component';
import { AjouterCommandeComponent } from './components/commandes/ajouter-commande/ajouter-commande.component';
import { AjouterClientComponent } from './components/clients/ajouter-client/ajouter-client.component';
import { AjouterFournisseurComponent } from './components/fournisseur/ajouter-fournisseur/ajouter-fournisseur.component';
import { AjouterProduitsComponent } from './components/produits/ajouter-produits/ajouter-produits.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    HomeComponent,
    SidebarComponent,
    CommandesComponent,
    ProduitsComponent,
    ClientsComponent,
    FournisseurComponent,
    AjouterCommandeComponent,
    AjouterClientComponent,
    AjouterFournisseurComponent,
    AjouterProduitsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    SidebarModule,
    BrowserAnimationsModule,
    DataTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
