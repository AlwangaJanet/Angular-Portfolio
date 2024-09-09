import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeroComponent } from "./hero/hero.component";
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from "./services/services.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
import { filter } from 'rxjs';
import { NavigationService } from './navigation.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  HeroComponent, AboutComponent, SkillsComponent, ProjectsComponent, ServicesComponent, ContactComponent, FooterComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Janets-portfolio';
  constructor(private router: Router, private navigationService: NavigationService) {}

  ngOnInit() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const tree = this.router.parseUrl(event.urlAfterRedirects);
      if (tree.fragment) {
        this.navigationService.scrollToElement(tree.fragment);
      }
    });
  }
}
