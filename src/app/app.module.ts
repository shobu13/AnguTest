import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import 'rxjs';

import {AppComponent} from './app.component';
import {MonPremierComponent} from './mon-premier/mon-premier.component';
import {AppareilComponent} from './appareil/appareil.component';
import {AppareilService} from './services/appareil.service';
import {AuthComponent} from './auth/auth.component';
import {AppareilViewComponent} from './appareil-view/appareil-view.component';
import {Routes, RouterModule} from '@angular/router';
import {AuthService} from './services/auth.service';
import {SingleAppareilComponent} from './single-appareil/single-appareil.component';
import {FourOhFourComponent} from './four-oh-four/four-oh-four.component';
import {AuthGuardService} from './services/auth-gard.service';
import { EditappareilComponent } from './editappareil/editappareil.component';
import {UserService} from './services/user.service';
import { UserListComponent } from './user-list/user-list.component';


const appRoutes: Routes = [
  {path: 'appareils', canActivate: [AuthGuardService], component: AppareilViewComponent},
  {path: 'appareils/:id', canActivate: [AuthGuardService], component: SingleAppareilComponent},
  {path: 'edit', canActivate: [AuthGuardService], component: EditappareilComponent},
  {path: 'auth', component: AuthComponent},
  {path: '', component: AppareilViewComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditappareilComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuardService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
