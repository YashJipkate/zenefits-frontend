import { Injectable } from '@angular/core';

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleInstanceService {

  private google: any;
  constructor() { this.google = google; }

  getGoogle() {
    return this.google;
  }
}
