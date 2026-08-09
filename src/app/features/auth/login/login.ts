import { Component, signal } from '@angular/core';
import { form, FormField, required, submit } from '@angular/forms/signals';
import { loginData } from '@core/models/login-data';

@Component({
  selector: 'app-login',
  imports: [ FormField ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  public readonly loginModel = signal<loginData>({
    email: '',
    password: ''
  });

  loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.email, { message: 'Email is required'});
    required(schemaPath.email, { message: 'Enter a valid email address' })
    required(schemaPath.password, { message: 'Password is required' });
  });

  onSubmit(event: Event){

    event.preventDefault();

    submit(this.loginForm, async () => {
      const credentials = this.loginModel();
      console.log('Logging in with -->', credentials);
      
    });
  }

}
