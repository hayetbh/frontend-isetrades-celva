import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClubService } from '../../services/club.service';
import { MembreService } from '../../services/membre.service';

@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.scss']
})
export class MembresComponent implements OnInit {
  membres: any = [];
  idclub: any;
  users: any= [];
  responsables: any= [];

  constructor(private _http:ClubService,private route: ActivatedRoute)
  { }

  ngOnInit() {
    this.idclub= this.route.snapshot.paramMap.get('id');
    this.getClubUsers(this.idclub);
  }
  //get membres of club
  getClubUsers(id_club:any) {
    this._http.getClubUsers(id_club)
      .subscribe(
        club => {
          this.users= club['data'];
        },
        error => {
          console.log(error);
        });
  }
//get the responsable of club
  getresponsables(id_club:any) {
    this._http.getResponsables(id_club)
      .subscribe(
        club => {
          this.responsables= club['data'];
        },
        error => {
          console.log(error);
        });
  }
}
