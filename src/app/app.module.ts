import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

// Here is where we add imports for bootstrap javascript comonpnents
// WE could cereate another module and then import it into this module
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import { AlertModule } from 'ngx-bootstrap/alert';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import { AppRoutingModule } from './/app-routing.module';

import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HomeComponent,
    ExperienceComponent,
    SkillsComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    CollapseModule.forRoot(),
    ButtonsModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
