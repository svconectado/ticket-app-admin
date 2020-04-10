import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html'
})
export class ForgetPasswordComponent implements OnInit {

  public forgetForm: FormGroup;
  public subtitle: string;
  public showForm: boolean;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService) {
    this.subtitle = 'Ingrese su correo electrónico y le enviaremos las instrucciones para recuperar su password.';
    this.showForm = true;
  }

  ngOnInit(): void {
    this.formBuilder();
  }

  public submit() {
    if (this.forgetForm.valid) {
      this.subtitle = `Hemos enviado las instrucciones a su correo electrónico,
      recuerde revisar en los correos de spam si el correo
      no le ha llegado en los próximos 5 minutos.`;
      this.showForm = false;
      this.toastr.success('Hemos procesado su solicitud exitosamente.');
    } else {
      this.toastr.error('El correo electronico es obligatorio.');
    }
  }

  public returnLogin() {
    this.router.navigateByUrl('/auth/login');
  }

  private formBuilder() {
    this.forgetForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,10}$')])],
    });
  }
}
