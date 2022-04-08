import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar'
import { MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import { DxDataGridModule } from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular';
import { DxTabPanelModule } from 'devextreme-angular';
import { DxFormModule } from 'devextreme-angular';
import { DxTextBoxModule } from 'devextreme-angular';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DxSelectBoxModule } from 'devextreme-angular';
import { DxDropDownBoxModule } from 'devextreme-angular';
import { DxListModule } from 'devextreme-angular';
import { DxoLabelModule } from 'devextreme-angular/ui/nested';
import { DxTextAreaModule } from 'devextreme-angular';
import { DxTreeListModule } from 'devextreme-angular';
import { globalConfig } from "devextreme/core/config";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ChartModule} from 'primeng/chart';
import { NgChartsModule } from 'ng2-charts';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CoupensComponent } from './coupens/coupens.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { TreeFlatOverviewExample } from './tree-flat-overview-example/tree-flat-overview-example.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PiechartComponent } from './piechart/piechart.component';
import { FormComponent } from './form/form.component';
import { ProfileinformationformComponent } from './profileinformationform/profileinformationform.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { App2Component } from './app/app.component';
import { form2 } from './form2/form2.component';
import { formmilitaire } from './formmilitaire/formmilitaire.component';
import { formcivil } from './formcivil/formcivil.component';
import { autreform } from './autreform/autreform.component';
import { charts } from './charts/charts.component';
import { MedaildialogComponent } from './medaildialog/medaildialog.component';
import { ProfiledetailaffichageComponent } from './profiledetailaffichage/profiledetailaffichage.component';
import { ProfiledetailsmodificationComponent } from './profiledetailsmodification/profiledetailsmodification.component';
import { DialogconfirmationsupComponent } from './dialogconfirmationsup/dialogconfirmationsup.component';
import { UpgrademilitaireComponent } from './upgrademilitaire/upgrademilitaire.component';
import { UpgradecivilComponent } from './upgradecivil/upgradecivil.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    ProductsComponent,
    StatisticsComponent,
    CoupensComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    TreeFlatOverviewExample,
    ToolbarComponent,
    PiechartComponent,
    FormComponent,
    ProfileinformationformComponent,
    LoginpageComponent,
    App2Component,
    form2,
    formmilitaire,
    formcivil,
    autreform,
    charts,
    MedaildialogComponent,
    ProfiledetailaffichageComponent,
    ProfiledetailsmodificationComponent,
    DialogconfirmationsupComponent,
    UpgrademilitaireComponent,
    UpgradecivilComponent,
    
  ],
  entryComponents:[MedaildialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatListModule,
    MatTreeModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatBadgeModule,
    DxDataGridModule,
    DxButtonModule,
    DxTabPanelModule,
    MatTooltipModule,
    DxFormModule,
    DxTextBoxModule,
    MDBBootstrapModule.forRoot(),
    DxSelectBoxModule,
    DxDropDownBoxModule,
    DxListModule,
    DxoLabelModule,
    DxTextAreaModule,
    DxTreeListModule,
    MatSlideToggleModule,
    FontAwesomeModule,
    ChartModule,
    NgChartsModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
