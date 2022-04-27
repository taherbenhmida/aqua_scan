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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { ToolbarComponent } from './toolbar/toolbar.component';

import { FormComponent } from './form/form.component';
import { ProfileinformationformComponent } from './profileinformationform/profileinformationform.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

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
import { ProfileinformationmatformComponent } from './profileinformationmatform/profileinformationmatform.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; 
import {MatGridListModule} from '@angular/material/grid-list';
import { AfterloginComponent } from './afterlogin/afterlogin.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { MailComponent } from './mail/mail.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { EdituserComponent } from './edituser/edituser.component';
import { EdituserdialogComponent } from './edituserdialog/edituserdialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { InterceptorService } from './loader/interceptor.service';
import { AdminComponent } from './admin/admin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import {MatStepperModule} from '@angular/material/stepper';
import { AuthGuard } from 'src/security/auth.guard';
import { TokenInterceptorService } from 'src/security/token-interceptor.service';
import { AuthService } from 'src/security/auth.service';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { DirectionComponent } from './direction/direction.component';
import { SidenavAdminComponent } from './sidenav-admin/sidenav-admin.component';
import { SidenavUserComponent } from './sidenav-user/sidenav-user.component';
import { AfterloginUserComponent } from './afterlogin-user/afterlogin-user.component';
import { ToolbarUserComponent } from './toolbar-user/toolbar-user.component';


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
    ToolbarComponent,
    
    FormComponent,
    ProfileinformationformComponent,
    LoginpageComponent,
    
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
    ProfileinformationmatformComponent,
    AfterloginComponent,
    EditprofileComponent,
    MailComponent,
    RegisterComponent,
    NavComponent,
    EdituserComponent,
    EdituserdialogComponent,
    AdminComponent,
    PagenotfoundComponent,
    HomeComponent,
    ScrollToTopComponent,
    DirectionComponent,
    SidenavAdminComponent,
    SidenavUserComponent,
    AfterloginUserComponent,
    ToolbarUserComponent,
    
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
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    FormsModule, ReactiveFormsModule,
    MatSortModule,
    HttpClientModule,
    MatSelectModule,
    MatOptionModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatStepperModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:InterceptorService,
      multi:true
    },
    AuthGuard,AuthService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
