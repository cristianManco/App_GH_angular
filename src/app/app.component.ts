import { Component } from '@angular/core'; 
import { HeaderComponent } from './shared/components/header/header.component'; 
import { RouterModule } from '@angular/router'; 
import { FooterComponent } from './shared/components/footer/footer.component';


@Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'], 
  standalone: true, 
  imports: [ HeaderComponent, RouterModule, FooterComponent] 
})
export class AppComponent {
  isSidenavOpened = true;
  toggleSidenav() {
    this.isSidenavOpened = !this.isSidenavOpened;
  }
}
