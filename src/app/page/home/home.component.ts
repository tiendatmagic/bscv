import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  numbersArray: number[] = Array.from({ length: 12 }).map(
    (_, index) => index + 1
  );
}
