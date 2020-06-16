import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  fetchData() {
    return of({
      data: 'Hello world'
    }).pipe(delay(1000));
  }

}
