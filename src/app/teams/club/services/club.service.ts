import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  api = "http://127.0.0.1:5010"
  constructor(private _http:HttpClient) { }
  getClubs() {
    return this._http.post<any>(
      this.api + "/club/getclubs", ""

    );
  }

  getClubUsers(idclub:any) {
    return this._http.post<any>(
      this.api + "/user/getClubUsers",
      {
        idclub:idclub
      }
    );
  }
  getMembres(idclub:any) {
    return this._http.post<any>(
      this.api + "/user/getMembres",
      {
        idclub:idclub
      }
    );
  }
  getResponsables(idclub:any) {
    return this._http.post<any>(
      this.api + "/user/getResponsables",
      {
        idclub:idclub
      }
    );
  }
  getuserClubs() {
    return this._http.post<any>(
      this.api + "/club/getuserClubs", ""
      ,
      {headers:{'authorization':`Bearer ${localStorage.getItem('token')}`}}
    );
  }
  ///club/getClubYouAreAdminIn

  getClubYouAreAdminIn() {
    return this._http.post<any>(
      this.api + "/club/getClubYouAreAdminIn", ""
      ,
      {headers:{'authorization':`Bearer ${localStorage.getItem('token')}`}}
    );
  }
  getadmin(idclub:any){
    return this._http.post<any>(
      this.api + "/club//isAdmin", {
        id_club:idclub
      }
      ,
      {headers:{'authorization':`Bearer ${localStorage.getItem('token')}`}}
    );
  }
}
