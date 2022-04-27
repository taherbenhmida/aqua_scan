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
import { AfterloginComponent } from './afterlogin/afterlogin.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AdminComponent } from './admin/admin.component';
import { HasRoleGuard } from 'src/security/has-role.guard';
import { AuthGuard } from 'src/security/auth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { DirectionComponent } from './direction/direction.component';
import { AfterloginUserComponent } from './afterlogin-user/afterlogin-user.component';


const routes: Routes = [
  { path : '' ,redirectTo:'login',pathMatch:'full'},
  { path:'notfound',component:PagenotfoundComponent},
  { path : 'login', component:LoginpageComponent},
  { path : 'admin', 
    component:AdminComponent,
    canActivate:[AuthGuard,HasRoleGuard],
    
  },

  {path : 'edit/:id', component:EdituserComponent},
  {path : 'afterlogin' , component:AfterloginComponent,children:[
    {path : 'home' , component:HomeComponent},
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
    {path : 'direction' , component:DirectionComponent},
    {path : 'editprofile' , component:EditprofileComponent},
    {path : 'details' , component:ProfiledetailaffichageComponent},
    {path : 'modification',component:ProfiledetailsmodificationComponent},
  ],canActivate:[AuthGuard,HasRoleGuard]},
 
  {path : 'afterloginuser' , component:AfterloginUserComponent,children:[
    {path : 'home' , component:HomeComponent},
    {path : 'dashboard' , component:DashboardComponent},
    {path : 'products' , component:ProductsComponent},
    {path : 'coupens' , component:CoupensComponent, children :[
      {path : 'upgrademilitaire' ,outlet:'outlet2' ,component:UpgrademilitaireComponent},
      {path : 'upgradecivil' ,outlet:'outlet2',component:UpgradecivilComponent},
    ]},
    {path : 'pages' , component:PagesComponent},
    {path : 'media' , component:MediaComponent},
    {path : 'direction' , component:DirectionComponent},
    {path : 'editprofile' , component:EditprofileComponent},
    {path : 'details' , component:ProfiledetailaffichageComponent},
    {path : 'modification',component:ProfiledetailsmodificationComponent},
  ],canActivate:[AuthGuard]},

    { path: '**', redirectTo: '/notfound'},
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

