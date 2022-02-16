import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
// navigation to the pages
clubs(){
  this.router.navigate(['accueil/clubs']);
}
calendrier(){
  this.router.navigate(['club/calendrier']);
}
}
