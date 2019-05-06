import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../models/message';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private http: HttpClient
  ) { }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>('../../../assets/data/messages.json');
  }

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>('../../../assets/data/users.json');
  }
}
