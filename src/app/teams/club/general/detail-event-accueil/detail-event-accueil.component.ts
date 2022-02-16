import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../services/event.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-detail-event-accueil',
  templateUrl: './detail-event-accueil.component.html',
  styleUrls: ['./detail-event-accueil.component.scss']
})
export class DetailEventAccueilComponent implements OnInit {
  idevent: any;
  event: any = [];
  constructor(private http: EventService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.idevent= this.route.snapshot.paramMap.get('id');
    this.getOneEvent();
  }

  //get the event information
  getOneEvent(){
    this.http.getOneEvent(this.idevent).subscribe(club => {
      this.event= club['data'];

    },
    error => {
      console.log(error);
    });
  }
}
