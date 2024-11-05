import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  popUp$ = new Subject<boolean>();
  title$ = new Subject<string>();
  message$ = new Subject<string>();
  confirm$ = new Subject<boolean>();
  showConfirm$ = new Subject<boolean>();

  reload: boolean = false;

  constructor() { }

  show() {
    this.popUp$.next(true);
  }

  hide() {
    this.popUp$.next(false);
  }

  setInfoPopup(title: string, message: string) {
    this.title$.next(title);
    this.message$.next(message);
    this.show();
  }

  showPopup() {
    this.popUp$.next(true);
  }

  getBody() {
    const popup = {
      title: this.title$,
      message: this.message$
    }
    return popup;
  }

  setBody(title: string, message: string) {
    this.title$.next(title);
    this.message$.next(message);
  }

  showBtnConfirm() {
    this.showConfirm$.next(true);
  }

  hideBtnConfirm() {
    this.showConfirm$.next(false);
  }
}
