import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  registerForm: FormGroup;
  constructor(_fb: FormBuilder, private dataService: DataService, private auth: AuthService, private router: Router) {
    this.email = new FormControl('', [
      Validators.required, Validators.email
    ]);
    this.password = new FormControl('', [
      Validators.required
    ]);
    this.confirmPassword = new FormControl('', [
      Validators.required
    ]);
    this.registerForm = _fb.group({
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    });
  }

  onRegister() {
    if (this.registerForm.value.password == this.registerForm.value.confirmPassword) {
      var data: any = {
        'email': this.registerForm.value.email,
        'password': this.registerForm.value.password,
      };
      this.registerForm.disable();
      this.auth.onRegister(data).subscribe((res: any) => {
        localStorage.setItem('bscv-token', res.access_token);
        localStorage.setItem('bscv-renew', res.refresh_token);
        this.auth.getToken = res.access_token;
        this.router.navigate(['/home']);
        this.auth.isLogin = true;
        this.auth.onLoad = true;
        this.registerForm.enable();
      },
        (error: any) => {
          this.auth.isLogin = false;
          this.registerForm.enable();
        }
      );
    }
  }

}
