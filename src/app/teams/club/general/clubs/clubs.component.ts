import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClubService } from '../../services/club.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss']
})
export class ClubsComponent implements OnInit {
  clubs: any = [];

  constructor(private _http:ClubService,private  router: Router)
  { }

  ngOnInit(): void {
    this.getclubs();
  }
//display the informations of all clubs
  getclubs() {
    this._http.getClubs()
      .subscribe(
        club => {
          this.clubs= club['data'];
          console.log(club);
        },
        error => {
          console.log(error);
        });
  }
  //send a request to the club specific
inscrire(e:any){
  this.router.navigate(['/clubs/envoyer_demande/'+e]);
}
//login button to your account
signin(){
  this.router.navigate(['/club/signin']);

}
}
