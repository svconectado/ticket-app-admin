import {Component, OnInit} from '@angular/core';
import {ModalService} from '../../shared/ui/modal/modal.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
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
      phone: '76523683'
    },
    {
      name: 'Sucursal 02',
      address: 'Colonia San Benito, Calle La Revolucion. Centro Comercial San Benito',
      department: 'San Salvador',
      city: 'San Salvador',
      phone: '76523683'
    },
    {
      name: 'Sucursal 03',
      address: 'Colonia San Benito, Calle La Revolucion. Centro Comercial San Benito',
      department: 'San Salvador',
      city: 'San Salvador',
      phone: '76523683'
    },
    {
      name: 'Sucursal 04',
      address: 'Colonia San Benito, Calle La Revolucion. Centro Comercial San Benito',
      department: 'San Salvador',
      city: 'San Salvador',
      phone: '76523683'
    },
    {
      name: 'Sucursal 05',
      address: 'Colonia San Benito, Calle La Revolucion. Centro Comercial San Benito',
      department: 'San Salvador',
      city: 'San Salvador',
      phone: '76523683'
    },
    {
      name: 'Sucursal 06',
      address: 'Colonia San Benito, Calle La Revolucion. Centro Comercial San Benito',
      department: 'San Salvador',
      city: 'San Salvador',
      phone: '76523683'
    }
  ];

  bodyText: string;
  public infoCompanyForm: FormGroup;
  public infoBranchForm: FormGroup;

  constructor(private modalService: ModalService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.bodyText = 'This text can be updated in modal 1';
    this.infoCompanyFormBuilder();
    this.infoBranchFormBuilder();
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModalInfoCompany(id: string) {
    this.modalService.close(id);
    this.infoCompanyFormBuilder();
  }

  closeModalInfoBranch(id: string) {
    this.modalService.close(id);
    this.infoBranchFormBuilder();
  }

  infoCompanyFormBuilder() {
    this.infoCompanyForm = this.fb.group({
      name: ['Pizza Hut', Validators.compose([Validators.required])],
      contactName: ['Pedro', Validators.compose([Validators.required])],
      email: ['info@pizzahut.com.sv', Validators.compose([Validators.required])],
    });
  }

  infoBranchFormBuilder() {
    this.infoBranchForm = this.fb.group({
      name: ['Sucursal 06', Validators.compose([Validators.required])],
      address: ['Colonia San Benito, Calle La Revolucion. Centro Comercial San Benito', Validators.compose([Validators.required])],
      department: ['San Salvador', Validators.compose([Validators.required])],
      city: ['San Salvador', Validators.compose([Validators.required])],
      phone: ['70987665'],
      queue: ['default', Validators.compose([Validators.required])],
    });
  }

  submitUpdateInfoCompany() {
    if (this.infoCompanyForm.valid) {
      this.closeModalInfoCompany('info-company');
    }
  }

  submitUpdateInfoBranch() {
    if (this.infoCompanyForm.valid) {
      this.closeModalInfoBranch('info-branch');
    }
  }

}
