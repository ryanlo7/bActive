import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { MatchesComponent } from './matches/matches.component';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'events', component: EventsComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'edit', component: EditComponent },
  { path: '', component: ProfileComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }