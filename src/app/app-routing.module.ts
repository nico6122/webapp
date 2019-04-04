import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { GrillaComponent } from './components/grilla/grilla.component';
import { AuthGuard } from './guards/auth.guard';
import { TimeComponent } from './components/time/time.component';


const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "user", component: UserComponent},
  {path: "time", component: TimeComponent},
  {path: "grilla", component: GrillaComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
