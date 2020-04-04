import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.formBuilder();
  }

  public submit() {
    if (this.registerForm.valid) {
      this.toastr.success('Hemos completado su solicitud.');
      setTimeout(() => {
        this.router.navigateByUrl('/company');
      }, 1000);
    } else {
      this.toastr.error('Todos los campos son obligatorios.');
    }
  }

  private formBuilder() {
    this.registerForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      contactName: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.required])],
    });
  }

}
