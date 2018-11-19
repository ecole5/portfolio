import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  myInterval = 2000;
  activeSlideIndex = 0;
  slides = [
    {image: 'assets/img/ugames/1.png'},
    {image: 'assets/img/ugames/2.png'},
    {image: 'assets/img/ugames/3.png'},
    {image: 'assets/img/ugames/4.png'},
    {image: 'assets/img/ugames/5.png'},
    {image: 'assets/img/ugames/6.png'},
    {image: 'assets/img/ugames/7.png'}
  ];

  constructor() { }

  ngOnInit() {
  }



}
