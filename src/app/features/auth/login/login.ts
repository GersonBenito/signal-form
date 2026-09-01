import { afterNextRender, Component, signal } from '@angular/core';
import { email, form, FormField, required, submit } from '@angular/forms/signals';
import { loginData } from '@core/models/login-data';
import { Button } from "@components/button/button";
import { Input } from '@components/input/input';

@Component({
  selector: 'app-login',
  imports: [FormField, Button, Input],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  public readonly loginModel = signal<loginData>({
    email: '',
    password: ''
  });

  public readonly isDesktop = signal<boolean>(false);

  constructor(){
    afterNextRender(() => {
      this.dimensionsVerification();
    });
  }

  loginForm = form(this.loginModel, (fieldPath) => {
    required(fieldPath.email, { message: 'Email is required'});
    // disabled(fieldPath.email, { when: () => true });
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

  dimensionsVerification(){
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    this.isDesktop.set(mediaQuery.matches);

    mediaQuery.onchange = (event) => {
      this.isDesktop.set(event.matches);
    };
  }

}
