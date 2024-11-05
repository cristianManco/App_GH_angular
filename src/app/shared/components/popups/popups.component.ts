import { Component } from '@angular/core';
import { PopupService } from '../../services/popup.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  styleUrls: ['./popups.component.css']
})
export class PopupsComponent {
  titlePopup: string = '';
  messagePopup: string = '';
  showConfirm: boolean = false;
  showPopup$: Subject<boolean> = this.popupService.popUp$;

  constructor(private popupService: PopupService) {
    this.popupService.title$.subscribe(res => {
      this.titlePopup = res;
    });

    this.popupService.message$.subscribe(res => {
      this.messagePopup = res;
    });

    this.popupService.showConfirm$.subscribe(res => {
      this.showConfirm = res;
    });
  }

  hidePopup() {
    this.popupService.hide();
    this.popupService.hideBtnConfirm();

    if (this.popupService.reload) {
      this.popupService.reload = false;
      this.popupService.confirm$.next(false);
      window.location.reload();
    }
  }

  confirmAction() {
    this.popupService.confirm$.next(true);
  }
}
