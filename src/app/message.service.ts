import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string): void {
    const time = new Date(Date.now());
    this.messages.push(
      `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}: ${message}`
    );
  }

  clear(): void {
    this.messages = [];
  }
}
