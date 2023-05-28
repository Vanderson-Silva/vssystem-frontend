import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedorlist.component.html',
  styleUrls: ['./fornecedorlist.component.css']
})
export class FornecedorComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor( ) {}

  ngOnInit(): void {
   
  }

  

 
 

}


