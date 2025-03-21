import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: false,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  email: FormControl;
  password: FormControl;
  loginForm: FormGroup;

  constructor(_fb: FormBuilder, private dataService: DataService, private auth: AuthService, private router: Router) {
    this.email = new FormControl('', [
      Validators.required, Validators.email
    ]);
    this.password = new FormControl('', [
      Validators.required
    ]);
    this.loginForm = _fb.group({
      email: this.email,
      password: this.password,
    });
  }

  onLogin() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      var data: any = {
        'email': this.loginForm.value.email,
        'password': this.loginForm.value.password
      };
      this.loginForm.disable();
      this.auth.onLogin(data).subscribe((res: any) => {
        localStorage.setItem('bscv-token', res.access_token);
        localStorage.setItem('bscv-renew', res.refresh_token);
        this.router.navigate(['/home']);
        this.auth.getToken = res.access_token;
        this.auth.isLogin = true;
        localStorage.setItem('profile', JSON.stringify(res['information']));
        this.loginForm.enable();
      },

        (error: any) => {
          this.auth.isLogin = false;
          this.loginForm.enable();
          if (error.error.message == 'Unauthorized') {
            this.dataService.showNotify('error', 'Lỗi đăng nhập', 'Đăng nhập thất bại, hãy kiểm tra lại thông tin');
          }
        }
      );
    }

  }
}
