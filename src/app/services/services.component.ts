import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../shared/reveal-on-scroll.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent { }
