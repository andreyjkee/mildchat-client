import {ChatService, Message} from './chat.service';
import {Component, ElementRef} from 'angular2/core';
import {Subject} from 'rxjs/Rx'

@Component({
    selector: 'chat',
    template: `
        <div class="messages">
            <p *ngFor="#msg of messages; #last = last">{{ msg.message }}</p>
        </div>
    `,
    directives: [],
    providers: [ChatService]
})
export class Chat {
    private messages: Message[] = new Array();

    constructor(private chatService: ChatService) {
        chatService.messages.subscribe(msg => {
            this.messages.push(msg);
        });
    }
}
