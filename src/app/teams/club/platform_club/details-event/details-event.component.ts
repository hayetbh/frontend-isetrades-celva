import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClubService } from '../../services/club.service';
import { EventService } from '../../services/event.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-details-event',
  templateUrl: './details-event.component.html',
  styleUrls: ['./details-event.component.scss']
})
export class DetailsEventComponent implements OnInit {
  idevent: any;
  event: any = [];
  admin: any;
  editEvent = true;
  editEventIcon = 'icofont-edit';
  idclub: any;
  //event
titre_event: any;
description_event:any;
date_debut: any;
date_fin: any;
url_image: any;
statut: any;
id_membre: any;
url_event: any;
heure_debut: any;
heure_fin: any;
  file: any;
  constructor(private http: EventService,private route: ActivatedRoute,private router: Router,private _http:ClubService) { }

  ngOnInit() {
    this.idclub= this.route.snapshot.paramMap.get('idc');
    this.idevent= this.route.snapshot.paramMap.get('id');
    this.getOneEvent();
    this.getadmin();
  }
  // to change to edit form and the icon of button
  toggleEditEvent() {
    this.editEventIcon = (this.editEventIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editEvent = !this.editEvent;
  }
  //get the admin of club
  getadmin() {
    this._http.getadmin(this.idclub).subscribe(club => {
      this.admin= club['isAdmin'];

    },
    error => {
      console.log(error);
    });
  }
  // participer in an event
  participer(id_event:any){
    this.http.participer(id_event).subscribe(data => {
      if(data['error']!=true){
        swal("Succès!", "vous avez participé avec succès", "success");
      }else{
       swal("Erreur!", data['message'], "error");
      }
    },
      err => {
    console.log(err);
      }
    );
  }
//get one event  by id
  getOneEvent(){
    this.http.getOneEvent(this.idevent).subscribe(club => {
      this.event= club['data'];

    },
    error => {
      console.log(error);
    });
  }
  //go to the page of participates
gotolisteparticipates(id_event:any, nomevent:any ){
  this.router.navigate(['dashboard_club/liste-participes/'+id_event]);
  nomevent = localStorage.setItem('nomevent',nomevent);

}
//read the path of event pic
image(e:any){
  this.url_image=e.target.files[0];
}
//update event picture
updatePic(e:any){
  const formData = new FormData();
  formData.append('file', e.target.files[0]);
    console.log(this.file)
  this.http.UpdateEventPic(formData).subscribe(data => {
    if(data['error']!=true){
      this.getOneEvent();
       }else{
      alert(data['message'])
    }
  },
    err => {
  //show error toast when the server went wrong
  console.log(err);
    }
  );
}
//update an event
updateEvent() {

  this.http.updateEvent(this.idevent,this.titre_event,this.description_event,this.date_debut,this.date_fin,this.heure_debut,this.heure_fin,this.statut,this.url_image)
  .subscribe(data => {
    console.log(this.url_image)
    if(data['error']!=true){
      swal("Succès!", "l'événement a été modifié avec succès", "success");
      this.getOneEvent();
      this.editEvent = !this.editEvent;

       }else{
      swal("Erreur!", data['message'], "error");
    }
  },
    err => {

   console.log(err);
    }
  );
}

}
