import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';


const routes: Routes = [
    { path: 'About', component: AboutComponent, data: {animation: 'About'}},
    { path: 'Projects', component: ProjectsComponent, data: {animation: 'Projects'}},
    { path: 'Resume', component: ResumeComponent, data: {animation: 'Resume'}},
    { path: 'Intro', component: HomeComponent, data: {animation: 'Home'}},
    { path: '', component: HomeComponent},
    { path: '**', redirectTo: 'Intro'}
  ];

  
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }