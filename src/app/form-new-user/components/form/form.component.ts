import { Component, OnInit } from '@angular/core';
// modulos forms
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder,) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  buildForm(){
    this.form = this.formBuilder.group({
    id: ['',[Validators.required]],
    name:  ['',[Validators.required]],
    company:  ['',[Validators.required]],
    country: ['',[Validators.required]],
    city:  ['',[Validators.required]],
    hobby:  ['',[Validators.required]],
    gender:  ['',[Validators.required]],
    date:  [ ,[Validators.required]],
    })
  }

  saveUser(event: Event){

  }
}
