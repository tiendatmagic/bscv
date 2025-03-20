import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-faq',
  standalone: false,
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  ngAfterViewInit(): void {
    setTimeout(() => {
      initFlowbite();
    }, 0);
  }
}
