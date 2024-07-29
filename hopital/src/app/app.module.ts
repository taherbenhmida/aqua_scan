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
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ChartModule} from 'primeng/chart';
import { NgChartsModule } from 'ng2-charts';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GaugeChartModule } from 'angular-gauge-chart'

import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProductsComponent } from './products/products.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { ProfileinformationformComponent } from './profileinformationform/profileinformationform.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

import { charts } from './charts/charts.component'; 
import { ProfiledetailaffichageComponent } from './profiledetailaffichage/profiledetailaffichage.component';
import { ProfiledetailsmodificationComponent } from './profiledetailsmodification/profiledetailsmodification.component';

import {DatePipe} from '@angular/common';
import { PopComponent } from './pop/pop.component';
import { ArmeComponent } from './arme/arme.component';
import { QualificationMilitaireComponent } from './qualification-militaire/qualification-militaire.component';
import { ServiceComponent } from './service/service.component';
import { SpecialiteComponent } from './specialite/specialite.component';
import { SituationComponent } from './situation/situation.component';
import { FonctionComponent } from './fonction/fonction.component';
import { BureauComponent } from './bureau/bureau.component';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import { PopArchiveComponent } from './pop-archive/pop-archive.component';
 
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; 
import {MatGridListModule} from '@angular/material/grid-list';
import { AfterloginComponent } from './afterlogin/afterlogin.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { EdituserComponent } from './edituser/edituser.component';
import { EdituserdialogComponent } from './edituserdialog/edituserdialog.component';
import { MatOptionModule } from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { InterceptorService } from './loader/interceptor.service';
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
import { ProfileinformationmatformComponent } from './profileinformationmatform/profileinformationmatform.component';
import { AgeChartComponent } from './chart/age-chart/age-chart.component';
import { StatisticService } from 'src/statistic_service/statistic.service';
import { ServiceChartComponent } from './chart/service-chart/service-chart.component';
import { CategorieGradeComponent } from './chart/categorie-grade/categorie-grade.component';
import { LineChartComponent } from './chart/line-chart/line-chart.component';
import { RendementComponent } from './rendement/rendement.component';
import { PresenceComponent } from './presence/presence.component';
import { AfterloginTerminalComponent } from './afterlogin-terminal/afterlogin-terminal.component';
import { TerminalComponent } from './terminal/terminal.component';
import { TerminalBodyComponent } from './terminal-body/terminal-body.component';
import { ToolbarTerminalComponent } from './toolbar-terminal/toolbar-terminal.component';
import { HistoriquePresenceComponent } from './historique-presence/historique-presence.component';
import { ModelComponent } from './model/model.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PersonnelSituationComponent } from './personnel-situation/personnel-situation.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import {FormControl} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RoomsComponent } from './rooms/rooms.component';
import { TanksComponent } from './tanks/tanks.component';
import { MapsComponent } from './maps/maps.component';
import { NurseryDashboardStatsComponent } from './nursery-dashboard-stats/nursery-dashboard-stats.component';
import { FishGrowthComponent } from './fish-growth/fish-growth.component';
import { WaterQualityComponent } from './water-quality/water-quality.component';
import { AjoutTanksComponent } from './ajout-tanks/ajout-tanks.component';
import { AjoutRoomsComponent } from './ajout-rooms/ajout-rooms.component';
import { FishManagmentComponent } from './fish-managment/fish-managment.component';
import { FishHealthComponent } from './fish-health/fish-health.component';
import { RoomsOverviewComponent } from './rooms-overview/rooms-overview.component';
import { TanksOverviewComponent } from './tanks-overview/tanks-overview.component';
import { ConfirmTransferDialogComponent } from './confirm-transfer-dialog/confirm-transfer-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    ProductsComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    ToolbarComponent,
    ProfileinformationformComponent,
    LoginpageComponent, 
    charts,
    ProfiledetailaffichageComponent,
    ProfiledetailsmodificationComponent,
    
    ProfileinformationmatformComponent,
    AfterloginComponent,
    EditprofileComponent,
  
    RegisterComponent,
    NavComponent,
    EdituserComponent,
    EdituserdialogComponent,
    PagenotfoundComponent,
    HomeComponent,
    ScrollToTopComponent,
    DirectionComponent,
    SidenavAdminComponent,
    SidenavUserComponent,
    AfterloginUserComponent,
    ToolbarUserComponent,
    PopComponent,
    ArmeComponent,
    QualificationMilitaireComponent,
    ServiceComponent,
    SpecialiteComponent,
    SituationComponent,
    FonctionComponent,
    BureauComponent,
    AgeChartComponent,
    ServiceChartComponent,
    CategorieGradeComponent,
    LineChartComponent,
    RendementComponent,
    TerminalComponent,
    PresenceComponent,
    AfterloginTerminalComponent,
    TerminalBodyComponent,
    ToolbarTerminalComponent,
    HistoriquePresenceComponent,
    ModelComponent,
    PersonnelSituationComponent,
    PopArchiveComponent,
    RoomsComponent,
    TanksComponent,
    MapsComponent,
    NurseryDashboardStatsComponent,
    FishGrowthComponent,
    WaterQualityComponent,
    AjoutTanksComponent,
    AjoutRoomsComponent,
    FishManagmentComponent,
    FishHealthComponent,
    RoomsOverviewComponent,
    TanksOverviewComponent,
    ConfirmTransferDialogComponent
  ],
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
    MatRadioModule,
    MatTooltipModule,
    
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
    MatStepperModule,
    MatTabsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatCheckboxModule,
    GaugeChartModule,
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:InterceptorService,
      multi:true
    },
    AuthGuard,AuthService,DatePipe,StatisticService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
    
    
    
    
  
  bootstrap: [AppComponent]
})
export class AppModule { }
