import { Component, OnInit } from '@angular/core';
import { SKILLSDATA } from '../skilldb';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  uGame = false;
  allSkills = SKILLSDATA; //SKILLS DATA should not be named skills
  constructor() { }

  ngOnInit() {
  }



}
