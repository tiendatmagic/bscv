import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  selectMenu: number = 0;
  info: any = [];
  ngOnInit() {
    this.info = localStorage.getItem('profile');
    this.info = JSON.parse(this.info);
  }
  chooseMenu(index: number) {
    this.selectMenu = index;
  }
}
