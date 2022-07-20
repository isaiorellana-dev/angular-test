import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginForm: {
    email: {
      val: string;
      error: string;
      isValid: () => boolean;
    };
    password: {
      val: string;
      error: string;
      isValid: () => boolean;
    };
  };

  constructor(private router: Router) {
    this.loginForm = {
      email: {
        val: '',
        error: 'Hay un error en el email',
        isValid: () => {
          return this.loginForm.email.val.length > 0;
        },
      },
      password: {
        val: '',
        error: 'Hay un error en el password',
        isValid: () => {
          return this.loginForm.password.val.length > 0;
        },
      },
    };
  }

  isValidForm() {
    return this.loginForm.email.isValid() && this.loginForm.password.isValid();
  }

  userDefault = {
    email: 'info@yampi.co',
    password: '12345678',
  };

  login() {
    if (
      this.loginForm.email.val === this.userDefault.email &&
      this.loginForm.password.val === this.userDefault.password
    ) {
      localStorage.setItem('user', JSON.stringify(this.loginForm.email.val));
      this.router.navigate(['/']);
    } else {
      console.log('login fallo');
    }
  }
}
