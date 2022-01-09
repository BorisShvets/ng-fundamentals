import {Routes} from '@angular/router'

import {
    EventsListcomponent,
    EventDetailsComponent,
    EventRouteActivator,
    EventListResolver,
    CreateEventComponet,
    CreateSessionComponent
}from './events/index'

import { Error404Component } from './erros/404.component';

export const appRoutes:Routes = [
    {path: 'events/new', component: CreateEventComponet, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListcomponent, resolve: {events:EventListResolver}},   
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    {path: 'events/session/new', component:CreateSessionComponent},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {
     path: 'user',
     loadChildren: () =>import('./user/user.module').then(m=>m.UserModule)
    }
]