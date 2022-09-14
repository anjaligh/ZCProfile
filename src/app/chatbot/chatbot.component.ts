import { Component, OnInit } from '@angular/core';
import { ApicallsService } from '../services/apicalls.service';
import { chatbotModel } from '../services/chatbotModel';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
chatbotData:chatbotModel[]=[];
  constructor(public apicall:ApicallsService) { }

  ngOnInit(): void {
    this.apicall.getChatbotResponse().subscribe(data=>{
      this.chatbotData=JSON.parse(JSON.stringify(data));
    })
  }

}
