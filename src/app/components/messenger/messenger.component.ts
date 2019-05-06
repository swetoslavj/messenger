import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/core/services/message.service';
import { Message } from 'src/app/core/models/message';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true}),
        query(':enter', stagger('500ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, offset: 0}),
            style({opacity: .5, offset: 0.5}),
            style({opacity: 1, offset: 1})
          ]))
        ]))
      ])
    ])
  ]
})
export class MessengerComponent implements OnInit {

  messages: Message[];
  users: User[];

  constructor(
    private mesageService: MessageService
  ) { }

  ngOnInit() {
    this.mesageService.getUsers()
      .subscribe((users) => {
        this.users = users;

        this.mesageService.getMessages()
          .subscribe((messages) => {
            this.messages = this.setQuestionsLogo(messages);
          });
      });
  }

  setQuestionsLogo(messages) {
    for (let i = 0; i < messages.length - 1; i++) {
      if (messages[i].userId !== messages[i + 1].userId) {
        let userLogo = (this.users.find(user => user.userId === messages[i].userId)).img;
        messages[i].logo = userLogo;
      }
    }
    return messages;
  }
}
