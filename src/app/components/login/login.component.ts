import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/servicio/auth.service';
import { UserInterface } from 'src/app/models/user-interface';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  private user: UserInterface = {
    email: '',
    password: ''
  }
  
  public isError = false;
  ngOnInit() {
  }
  onLogin(form: NgForm){

    if(form.valid){
        return this.authService.loginuser(this.user.email,this.user.password).subscribe(
          data => {this.authService.setUser(data)
         let token = data.sessionTokenBck;
          this.authService.setToken(token);
          this.router.navigate(["/"]);
          this.isError = false;
          },
         error => {this.onIsError();}
        );
    }else{
          this.onIsError();
    }

  }

  onIsError():void{
    this.isError = true;
    setTimeout(() => {
    this.isError = false;
    }, 3000);
  }
  

}
