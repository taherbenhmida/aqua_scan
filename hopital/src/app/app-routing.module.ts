import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoupensComponent } from './coupens/coupens.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MediaComponent } from './media/media.component';
import { PagesComponent } from './pages/pages.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ProfiledetailaffichageComponent } from './profiledetailaffichage/profiledetailaffichage.component';
import { ProfiledetailsmodificationComponent } from './profiledetailsmodification/profiledetailsmodification.component';
import { UpgrademilitaireComponent } from './upgrademilitaire/upgrademilitaire.component';
import { UpgradecivilComponent } from './upgradecivil/upgradecivil.component';

const routes: Routes = [
  {path : '' ,redirectTo:'dashboard',pathMatch:'full'},
  {path : 'dashboard' , component:DashboardComponent},
  {path : 'products' , component:ProductsComponent},
  {path : 'statistics' , component:StatisticsComponent},
  {path : 'coupens' , component:CoupensComponent, children :[
    {path : 'upgrademilitaire' ,outlet:'outlet2' ,component:UpgrademilitaireComponent},
    {path : 'upgradecivil' ,outlet:'outlet2',component:UpgradecivilComponent},
  ]},
  {path : 'pages' , component:PagesComponent},
  {path : 'media' , component:MediaComponent},
  {path : 'settings' , component:SettingsComponent},
  {path : 'login' , component:LoginpageComponent},
  {path : 'details' , component:ProfiledetailaffichageComponent},
  {path : 'modification',component:ProfiledetailsmodificationComponent},
  
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

