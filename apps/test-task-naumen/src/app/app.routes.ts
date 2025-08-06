import { PeoplesFeature, ProfileFeature } from '@ttn/peoples';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'clients', pathMatch: 'full'},
  { path: 'clients', component: PeoplesFeature},
  { path: 'profile/:id', component: ProfileFeature},
];
