import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-private-chat',
  templateUrl: './private-chat.component.html',
  styleUrls: ['./private-chat.component.css']
})
export class PrivateChatComponent implements OnInit, OnDestroy {
  @Input() toUser = '';

  constructor(public activeModal: NgbActiveModal, public chatService: ChatService) {}

  ngOnDestroy(): void {
    this.chatService.closePrivateChatMassage(this.toUser);
  }

  ngOnInit(): void {
  }

  sendMessage(content: string){
    this.chatService.sendPrivateMassage(this.toUser, content);
  }

}
