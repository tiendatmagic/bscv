import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logoImg: string = '/assets/images/logo.png';
  isLogin: boolean = false;
  isShowMenu: boolean = false;

  constructor(private dataServ: DataService, private auth: AuthService, private elementRef: ElementRef, private _router: Router) {
    this.auth.isLogin$.subscribe((value) => {
      this.isLogin = value;
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      initFlowbite();
    }, 0);
  }

  onLogout() {
    this.isShowMenu = false;
    this.auth.onLogout().subscribe((res: any) => {
      localStorage.removeItem("bscv-renew");
      localStorage.removeItem("bscv-token");
      localStorage.removeItem("profile");
      this.auth.getToken = '';
      this.auth.isLogin = false;
      this.auth.onLoad = true;
      this.auth.isLogin = false;
      this.auth.getProfile = null;

    },
      (error: any) => {
        this.auth.getToken = '';
        this.auth.isLogin = false;
        localStorage.removeItem("bscv-renew");
        localStorage.removeItem("bscv-token");
        localStorage.removeItem("profile");

        this._router.navigate(['/login']);

      }
    );
  }
}
