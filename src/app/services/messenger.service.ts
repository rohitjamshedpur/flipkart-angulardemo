import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject=new Subject()

  constructor() { }
  sendmag(product){
    this.subject.next(product)// trigger event
  }
  getmsg(){
    return this.subject.asObservable();
  }
}
