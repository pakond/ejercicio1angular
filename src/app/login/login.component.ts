import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    name: new FormControl('name', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('password', [Validators.required, Validators.minLength(4)])
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }

  get name() { return this.loginForm.get('name'); }

  get password() { return this.loginForm.get('password'); }
}
