import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../shared/reveal-on-scroll.directive';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent { }
