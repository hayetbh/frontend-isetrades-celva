//main
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { DashboardDefaultComponent } from "./pages/dashboard/dashboard-default/dashboard-default.component";
import { SimplePageComponent } from "./pages/simple-page/simple-page.component";
import { ProfileComponent } from "./pages/user/profile/profile.component";


//club-components
import { ClubsComponent } from "./teams/club/general/clubs/clubs.component";
import { EnvoyerDemandeComponent } from "./teams/club/general/envoyer-demande/envoyer-demande.component";
import { ResetPasswordComponent } from "./teams/club/general/reset-password/reset-password.component";
import { SigninComponent } from "./teams/club/general/signin/signin.component";
import { AccueilClubComponent } from "./teams/club/platform_club/accueil-club/accueil-club.component";
import { CalendrierComponent } from "./teams/club/platform_club/calendrier/calendrier.component";

import { DashboardClubComponent } from "./teams/club/platform_club/dashboard-club/dashboard-club.component";
import { ListParticipesComponent } from "./teams/club/platform_club/list-participes/list-participes.component";
import { ListeDemandesComponent } from "./teams/club/platform_club/liste-demandes/liste-demandes.component";
import { ListeParticipationComponent } from "./teams/club/platform_club/liste-participation/liste-participation.component";
import { MembresComponent } from "./teams/club/platform_club/membres/membres.component";
import { ProfileMembreComponent } from "./teams/club/platform_club/profile-membre/profile-membre.component";
import { ScheduleComponent } from "./teams/club/general/schedule/schedule.component";
import { TestaccueilComponent } from "./teams/club/platform_club/accueil/testaccueil.component";
import { DetailsEventComponent } from "./teams/club/platform_club/details-event/details-event.component";
import { DetailEventAccueilComponent } from "./teams/club/general/detail-event-accueil/detail-event-accueil.component";

//administration-components
//communication-components
//scolarite-components
//stagepfe-components
const routes: Routes = [
 //main-routes
  {
    path: "",
    component: HomePageComponent,
    children: [
      {
        path: "",
        component: DashboardDefaultComponent,
      },
    ],
  },

  {
    path: "dashboard",
    component: HomePageComponent,
    children: [
      {
        path: "",
        component: DashboardDefaultComponent,
      },

      {
        path: "profil",
        component: ProfileComponent,
      },
      { path: "simple", component: SimplePageComponent },


      // {
      //   path: "stage", component : ,
      //   children: [
      //     {

      //     }
      //   ]
      // },

      // {
      //   path: "communication", component: ,
      //   children: [
      //     {

      //     }
      //   ]
      // },
      // {
      //   path: "scolarite", component: ,
      //   children: [
      //     {

      //     }
      //   ]
      // },
      // {
      //   path: "selection", component: ,
      //   children: [
      //     {

      //     }
      //   ]
      // },
    ],
  },

//club-routes
//general
{ path: "club/signin", component: SigninComponent },
{ path: "club/reset_password", component: ResetPasswordComponent },
{ path: "accueil/clubs", component: ClubsComponent },
{ path: "club/calendrier/details/:id", component: DetailEventAccueilComponent },
{ path: "clubs/envoyer_demande/:id", component: EnvoyerDemandeComponent },
{ path: "club/calendrier", component: ScheduleComponent},
{
  //platform
  path: "dashboard_club",
  component: DashboardClubComponent,
  children: [
    {
      //accueil of platform
      path: "accueil/:id",
      component: AccueilClubComponent,
    },
    {
      //calendrier
      path: "calendrier/:id",
      component: CalendrierComponent,
    },

    {
      //liste of mambres
      path: "membres/:id",
      component: MembresComponent,
    },
    {
      //Mon profile
      path: "profile/:id",
      component: ProfileMembreComponent,
    },
    {
      //liste demandes
      path: "liste-demandes/:id",
      component: ListeDemandesComponent,
    },
    {
      //liste participes
      path: "liste-participes/:id",
      component: ListParticipesComponent,
    },
    {
      //Mes événements
      path: "liste-events/:id",
      component: ListeParticipationComponent,
    },

    {
      //accueil
      path: "accueil",
      component: TestaccueilComponent,
    },

    {
      //details of an event
      path: "details/:idc/:id",
      component: DetailsEventComponent,
    },

    {
      path: "details/:id",
      component: DetailsEventComponent,
    }
  ],
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
