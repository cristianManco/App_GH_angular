import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoaderService } from '../../shared/services/loader.service';
import { PopupService } from '../../shared/services/popup.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private loaderService: LoaderService,
    private popupService: PopupService
  ) { }

  signIn() {
    this.loaderService.setMessage('AUTENTICANDO...');
    this.loaderService.show();
    this.authService.signIn().subscribe((res: any) => {
      this.loaderService.hide();
      if (res.statusCode === 200) {
        this.router.navigate(['/dashboard']);
      } else if (res.statusCode === 401) {
        this.popupService.setInfoPopup('ERROR', 'El usuario se encuentra inactivo');
        this.popupService.showPopup();
      }
    }, (err: any) => {
      console.error('Error during login:', err);
      this.loaderService.hide();
    });
  }
}
