import {Component, NgZone} from '@angular/core';

import {AnimationItem} from 'lottie-web';
import {AnimationOptions} from 'ngx-lottie';

import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-button-spin-first',
  templateUrl: './button-spin-first.component.html',
  styleUrls: ['./button-spin-first.component.scss']
})
export class ButtonSpinFirstComponent {
  loading = false;
  loaded = false;
  buttonIsDisabled = false;
  options: AnimationOptions = {
    path: '/assets/1818-success-animation.json',
    loop: false,
  };
  private animationItem: AnimationItem;

  constructor(
    private apiService: ApiService,
    private ngZone: NgZone,
  ) {}

  animationCreated(animationItem: AnimationItem) {
    this.animationItem = animationItem;
  }

  onClick() {
    this.loading = true;
    this.apiService.fetchData().subscribe(data => {
      console.log(data);
      this.loaded = true;
      this.loading = false;
    });
  }

  onComplete() {
    this.ngZone.runOutsideAngular(() => this.animationItem.stop());
    this.buttonIsDisabled = true;
  }

}
