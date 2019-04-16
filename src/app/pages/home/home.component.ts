import { Component, OnInit } from '@angular/core';
import { Instructor } from '../../models/Instructor';

const ELEMENT_DATA: Instructor[] = [
  {
    "id": 1,
    "name": "Instructor",
    "surname": "#1",
    "classes": ["kpop", "hip-hop"]
  },
  {
    "id": 2,
    "name": "Instructor",
    "surname": "#1",
    "classes": ["kpop", "hip-hop"]
  },
  {
    "id": 3,
    "name": "random",
    "surname": "#5",
    "classes": ["kpop", "hip-hop"]
  }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(){

  }
  ngOnInit(){
  }
}
