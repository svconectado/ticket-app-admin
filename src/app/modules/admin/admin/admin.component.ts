import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: []
})
export class AdminComponent implements OnInit {
  title = 'Administración';
  description = 'Administración general de empresas';

  public companies: Company[] = [
    {
      name: 'Empresa 01',
      address:
        'Colonia San Benito, Calle La Revolucion. Centro Comercial San Benito',
      department: 'San Salvador',
      city: 'San Salvador',
      phone: '76523683',
      status: 'A'
    },
    {
      name: 'Empresa 02',
      address:
        'Colonia San Benito, Calle La Revolucion. Centro Comercial San Benito',
      department: 'San Salvador',
      city: 'San Salvador',
      phone: '76523683',
      status: 'A'
    },
    {
      name: 'Empresa 03',
      address:
        'Colonia San Benito, Calle La Revolucion. Centro Comercial San Benito',
      department: 'San Salvador',
      city: 'San Salvador',
      phone: '76523683',
      status: 'A'
    },
    {
      name: 'Empresa 04',
      address:
        'Colonia San Benito, Calle La Revolucion. Centro Comercial San Benito',
      department: 'San Salvador',
      city: 'San Salvador',
      phone: '76523683',
      status: 'A'
    },
    {
      name: 'Empresa 05',
      address:
        'Colonia San Benito, Calle La Revolucion. Centro Comercial San Benito',
      department: 'San Salvador',
      city: 'San Salvador',
      phone: '76523683',
      status: 'A'
    }
  ];

  dtOptions: DataTables.Settings = {};

  constructor() {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }
}
