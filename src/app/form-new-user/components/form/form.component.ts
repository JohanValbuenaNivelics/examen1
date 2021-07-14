import { Component, OnInit } from '@angular/core';
// modulos forms
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Country } from '@core/array/coutry.array';
import { FuenteDeUsuariosService } from '@app/core/services/fuenteDeUsuarios/fuente-de-usuarios.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  countries = Country;
  constructor(
    private formBuilder: FormBuilder,
    private fuenteUsers: FuenteDeUsuariosService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  buildForm() {
    this.form = this.formBuilder.group({
      id: [, [Validators.required,  Validators.minLength(2),Validators.maxLength(3)]],
      name: ['', [Validators.required, Validators.minLength(2),  Validators.maxLength(10)],],
      company: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      country: ['', [Validators.required, Validators.minLength(2)]],
      city: ['', [Validators.required, Validators.minLength(2),  Validators.maxLength(10)]],
      hobby: ['', [Validators.required, Validators.minLength(2),  Validators.maxLength(10)]],
      gender: ['NA', [Validators.required]],
      date: [, [Validators.required]],
    });
  }

  saveUser(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.fuenteUsers.addLista(this.form.value);
      this.router.navigate(['./table']);
    }
  }
}
