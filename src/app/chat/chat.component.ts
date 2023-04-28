import { Component } from '@angular/core';
import { ChatBotService } from '../services/chat-bot.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  message!: string; 

  constructor(private chatgptSvc:ChatBotService){}

  SendMessage(){
    this.chatgptSvc.getDataFromOpenAI(this.message);
    this.message = '';


  }

DeleteMessage(){

  location.reload();
}

}
