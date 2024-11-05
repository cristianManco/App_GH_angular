import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  
  public isLoading = new Subject<boolean>();
  private message: string = '';

  constructor() { }

  setMessage(message: string) {
    this.message = message;
  }

  getMessage(): string {
    return this.message;
  }

  show() {
    this.isLoading.next(true);
  }

  hide() {
    this.isLoading.next(false);
  }
}
