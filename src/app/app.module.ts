import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { AppComponent } from './app.component';
import { ButtonSpinFirstComponent } from './button-spin-first/button-spin-first.component';
import { ButtonSpinSecondComponent } from './button-spin-second/button-spin-second.component';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}


@NgModule({
  declarations: [
    AppComponent,
    ButtonSpinFirstComponent,
    ButtonSpinSecondComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
