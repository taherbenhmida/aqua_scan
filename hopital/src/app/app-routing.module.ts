import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MediaComponent } from './media/media.component';
import { PagesComponent } from './pages/pages.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfiledetailaffichageComponent } from './profiledetailaffichage/profiledetailaffichage.component';
import { ProfiledetailsmodificationComponent } from './profiledetailsmodification/profiledetailsmodification.component';

import { AfterloginComponent } from './afterlogin/afterlogin.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { EdituserComponent } from './edituser/edituser.component';
import { HasRoleGuard } from 'src/security/has-role.guard';
import { AuthGuard } from 'src/security/auth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { DirectionComponent } from './direction/direction.component';
import { AfterloginUserComponent } from './afterlogin-user/afterlogin-user.component';
import { RendementComponent } from './rendement/rendement.component';
import { AfterloginTerminalComponent } from './afterlogin-terminal/afterlogin-terminal.component';
import { PresenceComponent } from './presence/presence.component';
import { TerminalComponent } from './terminal/terminal.component';
import { HistoriquePresenceComponent } from './historique-presence/historique-presence.component';
import { ModelComponent } from './model/model.component';
import { PersonnelSituationComponent } from './personnel-situation/personnel-situation.component';
import { MapsComponent } from './maps/maps.component';
import { FishGrowthComponent } from './fish-growth/fish-growth.component';
import { WaterQualityComponent } from './water-quality/water-quality.component';
import { FishHealthComponent } from './fish-health/fish-health.component';
import { blobUrlMatcher } from './custom-url-matcher';  // Adjust the path as necessary

const routes: Routes = [
  { path : '' ,redirectTo:'login',pathMatch:'full'},
  { path:'notfound',component:PagenotfoundComponent},
  { path : 'login', component:LoginpageComponent},

  {path : 'edit/:id', component:EdituserComponent},
  {path : 'afterlogin' , component:AfterloginComponent,children:[
    {path : 'home' , component:HomeComponent},
    {path : 'products' , component:ProductsComponent}, 
    {path : 'pages' , component:PagesComponent},
    {path : 'media' , component:MediaComponent},
    {path : 'settings' , component:SettingsComponent},
    {path : 'direction' , component:DirectionComponent},
    {path : 'editprofile' , component:EditprofileComponent},
    {path : 'details' , component:ProfiledetailaffichageComponent},
    {path : 'modification',component:ProfiledetailsmodificationComponent},
    {path : 'rendement',component:RendementComponent},
    {path : 'model',component:ModelComponent},
    {path : 'maps',component:MapsComponent},
    {path : 'fish_growth',component:FishGrowthComponent},
    {path : 'water_quality',component:WaterQualityComponent},
    {path : 'fish_health', component:FishHealthComponent},
    {
      matcher: blobUrlMatcher,
      component: HomeComponent  // You can use any existing component, it won't be displayed
    },
  ],canActivate:[AuthGuard,HasRoleGuard]},
 
  {path : 'afterloginuser' , component:AfterloginUserComponent,children:[
    {path : 'home' , component:HomeComponent},
    {path : 'products' , component:ProductsComponent},
    
    {path : 'pages' , component:PagesComponent},
    {path : 'media' , component:MediaComponent},
    {path : 'direction' , component:DirectionComponent},
    {path : 'editprofile' , component:EditprofileComponent},
    {path : 'details' , component:ProfiledetailaffichageComponent},
    {path : 'modification',component:ProfiledetailsmodificationComponent},
    {path : 'rendement',component:RendementComponent},
  ],canActivate:[AuthGuard]},
  
  {path : 'afterloginterminal' , component:AfterloginTerminalComponent,children:[
    {path : 'terminal',component:TerminalComponent},
    {path : 'presence',component:PresenceComponent},
    {path : 'editprofile' , component:EditprofileComponent},
    {path : 'historique_presence' , component:HistoriquePresenceComponent},
    {path : 'personnel_situation', component:PersonnelSituationComponent}
  ],canActivate:[AuthGuard]},
    { path: '**', redirectTo: '/notfound'},

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

