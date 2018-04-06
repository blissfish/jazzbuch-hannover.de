import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ProjectsComponent } from './projects/projects.component';

export const routeConfig:Routes = [
{
	path: 'home',
	component: AppComponent
},
{
	path: 'projects',
	component: ProjectsComponent,
	  children: [
	  {
		  path: '',
	      outlet: 'sidemenu',
	      component: SideMenuComponent
	  }]
},
{ 
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
},
{
	path: '',
	redirectTo: 'home',
	pathMatch: 'full'
},
];

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    ProjectsComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routeConfig)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

