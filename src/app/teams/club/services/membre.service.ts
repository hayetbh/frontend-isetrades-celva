import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembreService {
  api = "http://127.0.0.1:5010"
  constructor(private _http:HttpClient) { }

  getRoles() {
    return this._http.post<any>(
      this.api + "/roles_and_teams/getroles",""

    );
  }
  getTeams() {
    return this._http.post<any>(
      this.api + "/roles_and_teams/getTeams",""
    );
  }
  getUser(id_membre:any) {
    return this._http.post<any>(
      this.api + "/user/getOneUser",
      {
        id_membre:id_membre
      }
    );
  }
  // /updateUserInfo
  UpdateUser(email:any,motdepasse:any,tel:any){
    return this._http.post<any>(
      this.api + "/user/updateUserInfo",
      {

        email:email,
        motdepasse:motdepasse,
        tel:tel
      },
      {headers:{'authorization':`Bearer ${localStorage.getItem('token')}`}}

    );
  }
  // /user/updateUserImage
  UpdatePic(file:any){
    return this._http.post<any>(
      this.api + "/user/updateUserImage",

        file,


      {headers:{'authorization':`Bearer ${localStorage.getItem('token')}`}}
      );
  }
}
