import { Component, OnInit } from '@angular/core';
import { ApiService } from './servicio/api.service';
import { RouterModule, Router , NavigationEnd } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public hideElement = false;
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        if(event.url == '/login' || event.url == '/grilla' || event.url == '/time'){
          this.hideElement = true;
        }else{
          this.hideElement = false;
        }
      }
    })
  }
  
  ngOnInit(){
   //this.apiServeci.getAllBook().subscribe(book => console.log(book));

  }
 
}
