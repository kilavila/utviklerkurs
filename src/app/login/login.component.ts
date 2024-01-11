import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../portal/auth.service';
import { CommonModule } from '@angular/common';
import { ApiService } from '../portal/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  serverOnline: boolean = false;

  constructor(
    private auth: AuthService,
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.api.serverStatus()
      .then(res => {
        if (res.status === 200) {
          this.serverOnline = true;
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  fb: FormBuilder = new FormBuilder();

  loginForm: FormGroup = this.fb.nonNullable.group({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.minLength(8)),
  });

  login() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value);
    }
  }

}
