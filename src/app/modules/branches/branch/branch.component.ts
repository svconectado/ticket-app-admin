import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Branch } from 'src/app/models/branch.model';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html'
})
export class BranchComponent implements OnInit {
  public departments = ['San Miguel', 'San Salvador'];
  public cities = ['San Miguel', 'San Salvador'];
  public newBranchForm: FormGroup;

  public company = {
    name: 'Pizza Hut',
    category: {
      name: 'Restaurante',
      description:
        'Es una cadena de restaurante de pizzas de comida rápida estadounidense con sede en Plano, Texas subsidiaria del grupo Yum! Brands. Es conocido por su menú italoamericano de cocina que incluye pizza y pasta, así como guarniciones y postres. Fundada por Dan y Frank Carney',
      image: 'fastfood.png'
    }
  };

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formBuilder();
  }

  public submit() {
    if (this.newBranchForm.valid) {
      const branch: Branch = this.newBranchForm.value;
      console.log(branch);
      this.router.navigate(['/company']);
      this.toastr.success('Sucursal creada correctamente');
    } else {
      this.toastr.error('Todos los campos son requeridos.');
    }
  }

  private formBuilder() {
    this.newBranchForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])],
      department: ['', Validators.compose([Validators.required])],
      city: ['', Validators.compose([Validators.required])],
      phone: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]{8}')
        ])
      ],
      status: ['', Validators.compose([Validators.required])]
    });
  }
}
