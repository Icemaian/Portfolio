import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RootpageComponent } from './rootpage/rootpage.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';


const route: Routes = [
  { path: 'About', component: AboutComponent},
  { path: 'Projects', component: ProjectsComponent},
  { path: 'Resume', component: ResumeComponent},
  { path: 'Portfolio', component: HomeComponent},
  { path: 'Home', component: HomeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    RootpageComponent,
    HomeComponent,
    ProjectsComponent,
    AboutComponent,
    ResumeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
