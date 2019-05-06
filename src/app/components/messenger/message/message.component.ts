import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/core/models/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input('message') message: Message;
  isAnswer: boolean = false;
  isImage: boolean = false;
  isLastMessage: boolean = false;

  constructor() { }

  ngOnInit() {
    this.isAnswer = this.isUserOwnThisMessage();
    this.isImage = this.isImageMessage();
    
    if (this.message.logo) { 
      this.isLastMessage = true;
    }
  }

  isUserOwnThisMessage() {
    return (localStorage.getItem('userId') == this.message.userId) ? true : false;
  }

  isImageMessage() {
    let imageUrlPattern = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
    return imageUrlPattern.test(this.message.text);
  }
}
