import { TestBed, inject } from '@angular/core/testing';
import { MessageService } from './message.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MessageService', () => {

  let service: MessageService;
  let httpMock: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [MessageService]
  }));
  
  beforeEach(() => {
    service = TestBed.get(MessageService);
    httpMock = TestBed.get(HttpTestingController);
  })

  it('should be initialized', () => {
    inject([MessageService], (messageService: MessageService) => {
      expect(messageService).toBeTruthy();
    });
  });

  it('should fetch messages', () => {
    service.getMessages()
      .subscribe((messages) => {
        expect(messages.length).toBeGreaterThan(0);
      });
  });

  it('should fetch users', () => {
    service.getUsers()
      .subscribe((users) => {
        expect(users.length).toBeGreaterThan(0);
      });
  });
});
