import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { map } from 'rxjs/operators';
import { WebsocketService } from "./websocket.service";
import { Scale } from '../models/scsle';

//const CHAT_URL = "ws://echo.websocket.org/";
const CHAT_URL = "wss://fake-websocket-data-generator.herokuapp.com";

export interface Messag1 {
  author: string;
  message: string;
}

@Injectable()
export class ChatService {
  public messages: Subject<Scale[]>;
  public oneScale: Subject<Scale>

  constructor(wsService: WebsocketService) {
    this.messages = <Subject<Scale[]>>wsService.connect(CHAT_URL)
    .pipe( 
    map(
      (response: MessageEvent): Scale[] => {
        let data = JSON.parse(response.data);
        //let data = response.data;
        return data
        // [{
        //   // author: data.author,
        //   // message: data.message,
        //   email: data.email,
        //   first_name: data.first_name,
        //   genre: data.genre,
        //   id: data.id,
        //   image: data.image,
        //   ip_address: data.ip_address,
        //   last_name: data.last_name,
        //   mass: data.mass,
        //   status: data.status
     
        // }];
      }

      

    ));
  }

  getScale(id: string): Observable<Scale> {
    //return this.httpClient.get<Scale>('http://localhost:3000/movies/' + id);
    return this.oneScale = this.messages[id]
    
  }

}