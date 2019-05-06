import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { MessengerComponent } from './messenger.component';
import { MessageService } from 'src/app/core/services/message.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MessageComponent } from './message/message.component';

describe('MessengerComponent', () => {
  let component: MessengerComponent;
  let fixture: ComponentFixture<MessengerComponent>;
  let messageService = MessageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessengerComponent, MessageComponent],
      imports: [HttpClientTestingModule],
      providers: [MessageService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerComponent);
    component = fixture.componentInstance;
    messageService = TestBed.get(MessageService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set questions logo', () => {
    let messages = [{
      "userId": 1,
      "text": "Did you enjoy your visit in Spain?",
      "date": 1557068868564
    },
    {
      "userId": 2,
      "text": "What recommendations you have?",
      "date": 1557068868564
    }];

    let usersData = {
      users: [{
        "userId": 1,
          "img": "https://wdsgroup.co.uk/media/catalog/product/h/e/heineken_1.png"
        },
        {
          "userId": 2,
          "img": "http://www.glarus.bg/media/images/3f/76/11_edit.png"
        }]
    };

    let questionsWithLogo = component.setQuestionsLogo.call(usersData, messages);
    expect(questionsWithLogo.filter(message => message.logo)).toBeTruthy();
  }); 
});
