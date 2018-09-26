import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Here we add modules for ngx bootstrap compoments, bootstrap is installed as npm module and we imports its style sheet in angular.json
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {CollapseModule} from 'ngx-bootstrap/collapse';



import { AppRoutingModule } from './/app-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';

import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HomeComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(),
    ButtonsModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
