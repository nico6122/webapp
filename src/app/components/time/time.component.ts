import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicio/api.service';
import { TimeInterface } from 'src/app/models/time-interface';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {


  constructor(private apiService: ApiService) { }
  private time: TimeInterface = {
    hora: '',
    timezone: ''
  }

  public showResult = false;
  ngOnInit() {
   //console.log( this.apiService.getTime().subscribe(book=> {console.log(book)}) );
  }

  showTime(form: NgForm){
    
    if(form.valid){
        this.apiService.getTime(this.time.hora,this.time.timezone).subscribe(book => {console.log(book)});
    }
  }


}
