import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { RestaurantEditComponent } from './components/restaurant-edit/restaurant-edit.component';
import { RestaurantAddComponent } from './components/restaurant-add/restaurant-add.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { DoctorsComponent } from './components/Doctors/doctors/doctors.component';
import { DoctorsAddComponent } from './components/Doctors/doctors-add/doctors-add.component';
import { DoctorsEditComponent } from './components/Doctors/doctors-edit/doctors-edit.component';
import { AnalysisCentersComponent } from './components/analysisCenters/analysis-centers/analysis-centers.component';
import { AnalysisCentersAddComponent } from './components/analysisCenters/analysis-centers-add/analysis-centers-add.component';
import { AnalysisCentersEditComponent } from './components/analysisCenters/analysis-centers-edit/analysis-centers-edit.component';
import { PharmaciesComponent } from './components/Pharmacies/pharmacies/pharmacies.component';
import { PharmaciesAddComponent } from './components/Pharmacies/pharmacies-add/pharmacies-add.component';
import { PharmaciesEditComponent } from './components/Pharmacies/pharmacies-edit/pharmacies-edit.component';
import { PlayStationsComponent } from './components/playStation/play-stations/play-stations.component';
import { PlayStationAddComponent } from './components/playStation/play-station-add/play-station-add.component';
import { PlayStationEditComponent } from './components/playStation/play-station-edit/play-station-edit.component';
import { SuperMarketsComponent } from './components/superMarkets/super-markets/super-markets.component';
import { SuperMarketEditComponent } from './components/superMarkets/super-market-edit/super-market-edit.component';
import { SuperMarketAddComponent } from './components/superMarkets/super-market-add/super-market-add.component';
import { WorkSpaceComponent } from './components/workSpace/work-space/work-space.component';
import { WorkSpaceAddComponent } from './components/workSpace/work-space-add/work-space-add.component';
import { WorkSpaceEditComponent } from './components/workSpace/work-space-edit/work-space-edit.component';
import { RestaurantEditSpecificComponent } from './components/restaurant-edit-specific/restaurant-edit-specific.component';
import { DoctorEditSpecificComponent } from './components/Doctors/doctor-edit-specific/doctor-edit-specific.component';
import { CenterEditSpecificComponent } from './components/analysisCenters/center-edit-specific/center-edit-specific.component';
import { PharmacyEditSpecificComponent } from './components/Pharmacies/pharmacy-edit-specific/pharmacy-edit-specific.component';
import { SuperMarketEditSpecificComponent } from './components/superMarkets/super-market-edit-specific/super-market-edit-specific.component';
import { WorkSpaceEditSpecificComponent } from './components/workSpace/work-space-edit-specific/work-space-edit-specific.component';
import { PlayStationEditSpecificComponent } from './components/playStation/play-station-edit-specific/play-station-edit-specific.component';
import { LoginComponent } from './components/login/login/login.component';
import { NotFoundComponent } from './components/NotFound/not-found/not-found.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { authGuard } from './Guards/auth.guard';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: 'adminPanel',
    component: AdminPanelComponent,
    children: [
      {
        path: 'restaurant',
        component: RestaurantComponent,
        children: [
          { path: '', redirectTo: 'restaurantEdit', pathMatch: 'full' },
          { path: 'restaurantAdd', component: RestaurantAddComponent },
          { path: 'restaurantAdd', component: RestaurantAddComponent },
          { path: 'restaurantEdit', component: RestaurantEditComponent },
          {
            path: 'restaurantEditSpecific/:id',
            component: RestaurantEditSpecificComponent,
          },
          { path: '**', component: NotFoundComponent },
        ],
      },
      {
        path: 'doctors',
        component: DoctorsComponent,
        children: [
          { path: '', redirectTo: 'doctorsEdit', pathMatch: 'full' },
          { path: 'doctorsAdd', component: DoctorsAddComponent },
          { path: 'doctorsAdd', component: DoctorsAddComponent },
          { path: 'doctorsEdit', component: DoctorsEditComponent },
          {
            path: 'doctorEditSpecific/:id',
            component: DoctorEditSpecificComponent,
          },
          { path: '**', component: NotFoundComponent },
        ],
      },
      {
        path: 'analysisCenter',
        component: AnalysisCentersComponent,
        children: [
          { path: '', redirectTo: 'analysisCenterEdit', pathMatch: 'full' },
          { path: 'analysisCenterAdd', component: AnalysisCentersAddComponent },
          { path: 'analysisCenterAdd', component: AnalysisCentersAddComponent },
          {
            path: 'analysisCenterEdit',
            component: AnalysisCentersEditComponent,
          },
          {
            path: 'centerEditSpecific/:id',
            component: CenterEditSpecificComponent,
          },
          { path: '**', component: NotFoundComponent },
        ],
      },
      {
        path: 'pharmacies',
        component: PharmaciesComponent,
        children: [
          { path: '', redirectTo: 'pharmaciesEdit', pathMatch: 'full' },
          { path: 'pharmaciesAdd', component: PharmaciesAddComponent },
          { path: 'pharmaciesEdit', component: PharmaciesEditComponent },
          {
            path: 'pharmacyEditSpecific/:id',
            component: PharmacyEditSpecificComponent,
          },
          { path: '**', component: NotFoundComponent },
        ],
      },
      {
        path: 'playStation',
        component: PlayStationsComponent,
        children: [
          { path: '', redirectTo: 'playStationEdit', pathMatch: 'full' },
          { path: 'playStationAdd', component: PlayStationAddComponent },
          { path: 'playStationEdit', component: PlayStationEditComponent },
          {
            path: 'playStationEditSpecific/:id',
            component: PlayStationEditSpecificComponent,
          },
          { path: '**', component: NotFoundComponent },
        ],
      },
      {
        path: 'superMarket',
        component: SuperMarketsComponent,
        children: [
          { path: '', redirectTo: 'superMarketEdit', pathMatch: 'full' },
          { path: 'superMarketAdd', component: SuperMarketAddComponent },
          { path: 'superMarketEdit', component: SuperMarketEditComponent },
          {
            path: 'superMarketEditSpecific/:id',
            component: SuperMarketEditSpecificComponent,
          },
          { path: '**', component: NotFoundComponent },
        ],
      },
      {
        path: 'workSpace',
        component: WorkSpaceComponent,
        children: [
          { path: '', redirectTo: 'workSpaceEdit', pathMatch: 'full' },
          { path: 'workSpaceAdd', component: WorkSpaceAddComponent },
          { path: 'workSpaceEdit', component: WorkSpaceEditComponent },
          {
            path: 'workSpaceEditSpecific/:id',
            component: WorkSpaceEditSpecificComponent,
          },
          { path: '**', component: NotFoundComponent },
        ],
      },
      { path: '', component: HomeComponent },
    ],
    canActivate: [authGuard],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];
