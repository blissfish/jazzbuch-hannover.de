import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartComponent }      from './start/start.component';
import { HannoverComponent } from './hannover/hannover.component';
import { ProjectsComponent }   from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { MediaComponent } from './media/media.component';
import { LinksComponent } from './links/links.component';
const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StartComponent },
  { path: 'hannover', component: HannoverComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'media', component: MediaComponent },
  { path: 'links', component: LinksComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ], 
  declarations: []
})
export class AppRoutingModule { }
