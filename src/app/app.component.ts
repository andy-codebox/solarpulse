import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators'; // test
import { NgIf } from '@angular/common'; // test
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { SecondSectionComponent } from "./second-section/second-section.component";
import { AboutUsComponent } from './about-us/about-us.component';
import { ThirdSectionComponent } from "./third-section/third-section.component";
import { FourthSectionComponent } from "./fourth-section/fourth-section.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { TermsComponent } from './terms/terms.component';
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, HeaderComponent, HomeComponent, SecondSectionComponent, AboutUsComponent, ThirdSectionComponent, FourthSectionComponent, ContactUsComponent, TermsComponent, PrivacyPolicyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'solarpulse';
  // test
  showGeneralContent = true;

  constructor(private router: Router) {
    // Listen to router events and update whether to show general content
    this.router.events.pipe(
      filter(event => event.constructor.name === 'NavigationEnd')
    ).subscribe(() => {
      const currentRoute = this.router.url;
      this.showGeneralContent = !(currentRoute === '/privacy-policy' || currentRoute === '/terms');

      setTimeout(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }, 100);
    });
  }
}
