import { AuthService } from './user/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import{
  EventsListcomponent,
  EventThumbnailComponet,
  EventService,
  EventDetailsComponent,
  CreateEventComponet,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe

}from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { CollapsibleWellComponet } from './common/collapsible-well.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';
import { Error404Component } from './erros/404.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListcomponent,
    EventThumbnailComponet,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponet,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponet,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
     EventService,
     ToastrService,
     EventRouteActivator,
     EventListResolver,
     {
       provide: 'canDeactivateCreateEvent',
       useValue: checkDirtyState
      },
      AuthService
    ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponet){

if(component.isDirty){
 return window.confirm('You have not saved this event, do you really want to cancel?')
}

  return true;
}
