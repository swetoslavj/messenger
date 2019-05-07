import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { MessageService } from '../services/message.service';
import { map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerResolver implements Resolve<any> {

  constructor(
    private messageService: MessageService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return forkJoin([
      this.messageService.getMessages(),
      this.messageService.getUsers()
    ])
    .pipe(map(result => {
      return {
        messages: result[0],
        users: result[1]
      }
    }))
  }
}
