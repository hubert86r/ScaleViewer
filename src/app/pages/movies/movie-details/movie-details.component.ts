import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../services/http.service';
import { Movie } from '../../../models/movie';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Scale } from 'src/app/models/scsle';
import { WebsocketService } from 'src/app/services/websocket.service';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movieDetails: Observable<Scale>;
  scaleId: Observable<string>;

  constructor(
    //private http: HttpService, 
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    //private chat: ChatService
    ) {}

  ngOnInit() {
    this.scaleId = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => params.get('id'))
    ) 
    console.log("scaleId: " + this.scaleId)
    //this.movieDetails = this.route.paramMap
    console.log("route: " + this.route)



    console.log("movieDetails22: " 
    + 
     this.route.paramMap.pipe(
      switchMap((params: ParamMap) => params.get('id'))
    )
    )
    //this.movieDetails = this.chat.getScale('id')
  }

  goToMovies() {
    //this.router.navigate(['/movies']);
    this.location.back();
  }
}
