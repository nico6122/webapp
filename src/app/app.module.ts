import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './servicio/login.service';
import { AuthService } from './servicio/auth.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { GrillaComponent } from './components/grilla/grilla.component';

import { AgGridModule } from 'ag-grid-angular/main';
import { ApiService } from './servicio/api.service';
import { TimeComponent } from './components/time/time.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    LoginComponent,
    UserComponent,
    GrillaComponent,
    TimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([]),
    NgbModule
  ],
  providers: [LoginService, AuthService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
