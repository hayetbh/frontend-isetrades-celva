import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import { MembreService } from '../../services/membre.service';
import { Router } from '@angular/router';
import { ClubService } from '../../services/club.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert';
@Component({
  selector: 'app-profile-membre',
  templateUrl: './profile-membre.component.html',
  styleUrls: ['./profile-membre.component.scss'],
  animations: [
    trigger('fadeInOutTranslate', [
      transition(':enter', [
        style({opacity: 0}),
        animate('400ms ease-in-out', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translate(0)'}),
        animate('400ms ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class ProfileMembreComponent implements OnInit {
  editProfile = true;
  editProfileIcon = 'icofont-ui-edit';


  public basicContent: string;


  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  profitChartOption: any;
 //listes
  user:any =[];
  clubs:any =[];
   //local storage items
  idmembre:any;
  prenom: string;
  nom: string;
  role: string;
  //update fields
  email:any;
  motdepasse:any;
  tel: any;
//message confirmation
  message = '';
  file: any;
  constructor(private modalService: NgbModal,private http:ClubService,private _http:MembreService,private  router: Router)
  { }

  ngOnInit(): void {
    this.idmembre=localStorage.getItem('id_membre') ;
    this.nom=localStorage.getItem('nom');
    this.prenom=localStorage.getItem('prenom');
    this.role=localStorage.getItem('role');
    this.getuser(this.idmembre);
    this.message='';
  }
  //get current user
  getuser(id_membre:any) {
    this._http.getUser(id_membre)
      .subscribe(
        club => {
          this.user= club['data'];

        },
        error => {
          console.log(error);
        });
  }
// update the email/tel /password of user
  Updateuser() {
    this._http.UpdateUser(this.email,this.motdepasse,this.tel)
    .subscribe(data => {
      if(data['error']!=true){
        console.log(data)
        swal("Succès!", "votre profile a été modifier avec succès", "success");
        this.getuser(this.idmembre)
        this.editProfile = !this.editProfile;
         }else{
          swal("Erreur!", data['message'], "error");
      }
    },
      err => {
     console.log(err);
      }
    );
  }
  //update the image of profil
   updatePic(e:any){
    const formData = new FormData();

    formData.append('file', e.target.files[0]);
      console.log(this.file)
    this._http.UpdatePic(formData).subscribe(data => {
      if(data['error']!=true){
        this.file='';

        this.getuser(this.idmembre);


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
  //open the form of edit an profile
  toggleEditProfile() {
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editProfile = !this.editProfile;
  }

}
