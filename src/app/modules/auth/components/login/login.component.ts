import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.formBuilder();
  }

  public submit() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value).subscribe((response) => {
        console.log(JSON.stringify(response));
        this.router.navigateByUrl('/company').then(() => {
        });
      }, error => {
        console.log(JSON.stringify(error));
        // this.toastr.error('Todos los campos son requeridos.');
      });
    } else {
      // this.toastr.error('Todos los campos son requeridos.');
    }
  }

  private formBuilder() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,10}$')])],
      password: ['', Validators.compose([Validators.required])],
    });
  }
}
