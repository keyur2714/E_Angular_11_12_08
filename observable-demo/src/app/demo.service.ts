import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() { 
    console.log("Demo Service Object Created...! ");
  }

  getObservable() : Observable<any> {
    return new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.next("Keyur");
      setTimeout(() => {
        subscriber.next(4);
        subscriber.next("Denish");
        subscriber.complete();
      }, 1000);
    });
  }
}
