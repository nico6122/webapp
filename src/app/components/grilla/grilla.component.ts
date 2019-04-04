import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicio/api.service';
import { GridOptions, GridOptionsWrapper , Grid } from 'ag-grid-community';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {

  rowData: any[] = [];

  private gridOptions: GridOptions ;
  
  constructor(private apiService: ApiService) {
    this.gridOptions = <GridOptions>{
    };
    this.gridOptions.columnDefs = [
      {headerName: 'BookingId',width: 110,field: 'bookingId',filter: "agNumberColumnFilter"},
      {headerName: 'Cliente', width: 140,field:'Cliente'},
      {headerName: 'Fecha Creación',width: 120,field: 'bookingTime'},
      {headerName: 'Dirección',width: 400,field: 'locationId.streetAddress'},
      {headerName: 'Precio',width: 110,field: 'bookingPrice',filter: "agNumberColumnFilter"},
      
    ];
   }


  ngOnInit() {
    
  
     this.apiService.getAllBook().subscribe( book => {
       
      book.forEach(x => x.Cliente = `${x.tutenUserClient.firstName} ${x.tutenUserClient.lastName}`)
      this.rowData = book;
     }
     );
  }


}
 