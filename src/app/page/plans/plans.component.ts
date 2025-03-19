import { Component } from '@angular/core';

@Component({
  selector: 'app-plans',
  standalone: false,
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss'
})
export class PlansComponent {
  numbersArray: number[] = Array.from({ length: 12 }).map(
    (_, index) => index + 1
  );
}
