import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CommandesComponent } from "./components/commandes/commandes.component";
import { ProduitsComponent } from "./components/produits/produits.component";
import { ClientsComponent } from "./components/clients/clients.component";
import { FournisseurComponent } from "./components/fournisseur/fournisseur.component";
import { AjouterCommandeComponent } from "./components/commandes/ajouter-commande/ajouter-commande.component";
import { AjouterClientComponent } from "./components/clients/ajouter-client/ajouter-client.component";
import { AjouterFournisseurComponent } from "./components/fournisseur/ajouter-fournisseur/ajouter-fournisseur.component";
import { AjouterProduitsComponent } from "./components/produits/ajouter-produits/ajouter-produits.component";


export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'commande',
        component: CommandesComponent,
    }
    ,
    {
        path: 'produits',
        component: ProduitsComponent,
    }
    ,
    {
        path: 'clients',
        component: ClientsComponent,
    }
    ,
    {
        path: 'fournisseur',
        component: FournisseurComponent,
    }
    ,
    {
        path: 'ajouterCommande',
        component: AjouterCommandeComponent,
    },
    {
        path: 'ajouterClient',
        component: AjouterClientComponent,

    },
    {
        path: 'ajouterFournisseur',
        component: AjouterFournisseurComponent,

    }   
    ,
    {
        path: 'ajouterProduit',
        component: AjouterProduitsComponent,

    }   
];