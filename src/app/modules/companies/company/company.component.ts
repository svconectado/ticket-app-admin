import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: []
})
export class CompanyComponent implements OnInit {

  public header = {
    title: 'Empresa',
    description: 'Gestione sus sucursales, colas y usuarios.'
  };

  public company = {
    name: 'Pizza Hut',
    category: {
      name: 'Restaurante',
      description: 'Es una cadena de restaurante de pizzas de comida rápida estadounidense con sede en Plano, Texas subsidiaria del grupo Yum! Brands. Es conocido por su menú italoamericano de cocina que incluye pizza y pasta, así como guarniciones y postres. Fundada por Dan y Frank Carney',
      image: 'fastfood.png'
    }
  };

  public branches = [
    {
      name: 'Sucursal 01',
      address: 'Colonia San Benito, Calle La Revolucion. Centro Comercial San Benito',
      department: 'San Salvador',
      city: 'San Salvador',
      phone: '76523683',
      status: 'A'
    },
    {
      name: 'Sucursal 02',
      address: 'Colonia San Benito, Calle La Revolucion. Centro Comercial San Benito',
      department: 'San Salvador',
      city: 'San Salvador',
      phone: '76523683',
      status: 'A'
    },
    {
      name: 'Sucursal 03',
      address: 'Colonia San Benito, Calle La Revolucion. Centro Comercial San Benito',
      department: 'San Salvador',
      city: 'San Salvador',
      phone: '76523683',
      status: 'A'
    },
    {
      name: 'Sucursal 04',
      address: 'Colonia San Benito, Calle La Revolucion. Centro Comercial San Benito',
      department: 'San Salvador',
      city: 'San Salvador',
      phone: '76523683',
      status: 'A'
    },
    {
      name: 'Sucursal 05',
      address: 'Colonia San Benito, Calle La Revolucion. Centro Comercial San Benito',
      department: 'San Salvador',
      city: 'San Salvador',
      phone: '76523683',
      status: 'A'
    }
  ];

  dtOptions: DataTables.Settings = {};

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }
}
