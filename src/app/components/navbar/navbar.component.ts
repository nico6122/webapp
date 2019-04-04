import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicio/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  public app_name = "HOME";
  public isLogged: boolean = false;


  
  ngOnInit() {
    this.onCheckUser();
  }

  onLogOut():void{
    this.authService.logoutUser();
    this.router.navigate(['/']);
  }

  onCheckUser():void{
    if(this.authService.getCurrentUser() == null){
      this.isLogged = false;
    }else{
      this.isLogged = true;
    }
  }

}
