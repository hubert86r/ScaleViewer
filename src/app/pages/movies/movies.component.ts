import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { Movie } from '../../models/movie';
import { Scale } from '../../models/scsle';
import { WebsocketService } from "../../services/websocket.service";
import { ChatService } from "../../services/chat.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [WebsocketService, ChatService]
})
// export class MoviesComponent implements OnInit {
//   movies: Observable<Movie[]>;
//   constructor(private http: HttpService) {}

//   ngOnInit() {
//     this.movies = this.http.getMovies();
//   }

export class MoviesComponent implements OnInit {
  //movies = new Subject<Scale[]>();
  movies: Observable<Scale[]>;

  
  
  constructor(private chatService: ChatService)  {
    console.log("movies: " + this.movies);
    chatService.messages.subscribe(msg => {
      console.log("Response from websocket: " + msg + this.movies);
      //this.movies = msg;
    });
    
  }

  ngOnInit() {
    this.movies = this.chatService.messages.asObservable();
  }

}
