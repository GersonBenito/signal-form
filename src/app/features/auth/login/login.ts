import { Component, signal } from '@angular/core';
import { email, form, FormField, required, submit } from '@angular/forms/signals';
import { StatusControl } from '@core/directives/status-control';
import { loginData } from '@core/models/login-data';

@Component({
  selector: 'app-login',
  imports: [ FormField, StatusControl ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  public readonly loginModel = signal<loginData>({
    email: '',
    password: ''
  });

  loginForm = form(this.loginModel, (fieldPath) => {
    required(fieldPath.email, { message: 'Email is required'});
    email(fieldPath.email, { message: 'Enter a valid email address' })
    required(fieldPath.password, { message: 'Password is required' });
  });

  onSubmit(event: Event){

    event.preventDefault();

    submit(this.loginForm, async () => {
      const credentials = this.loginModel();
      console.log('Logging in with -->', credentials);
      
    });
  }

}
