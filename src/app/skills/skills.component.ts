import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill';
import { SKILLSDATA } from '../skilldb';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  allSkills = SKILLSDATA; //SKILLS DATA should not be named skills
  constructor() { }

  ngOnInit() {
  }

}
