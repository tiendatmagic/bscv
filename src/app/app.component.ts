import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { AuthService } from './services/auth.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'bscv';

  constructor(private auth: AuthService, private router: Router) {
    this.auth.onLoad$.subscribe((value) => {
      if (value) {
        var token = localStorage.getItem('bscv-token');
        if (token) {
          this.auth.onMe({}).subscribe((res: any) => {
          },
            (error: any) => {
              if (error.status == 0 && error.statusText == 'Unknown Error') {
                localStorage.removeItem("bscv-renew");
                localStorage.removeItem("bscv-token");
              }
            }
          );
        }
        else {
          this.auth.refreshAccessToken();
        }
      }
    });
  }

  ngOnInit(): void {
    var token = localStorage.getItem('bscv-token');
    const accessPaths = ['my', 'account', 'dashboard', 'admin', 'deposit', 'withdraw', 'event', 'wallet'];

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        const firstPath = event.url.split('/')[1];

        if (accessPaths.includes(firstPath)) {
          if (!this.auth.isLogin && !token) {
            this.router.navigate(['/login']);
          }
        }
      }
    });

  }
  ngAfterViewInit(): void {
    initFlowbite();
  }
}
