import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { StartComponent } from './start/start.component';
import { AppRoutingModule } from './/app-routing.module';
import { HannoverComponent } from './hannover/hannover.component';
import { ContactComponent } from './contact/contact.component';
import { MediaComponent } from './media/media.component';
import { LinksComponent } from './links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    StartComponent,
    HannoverComponent,
    ContactComponent,
    MediaComponent,
    LinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
