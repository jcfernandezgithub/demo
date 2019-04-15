import { Component } from '@angular/core';
import { Client } from 'src/app/models/Client';
import { Instructor } from '../../models/Instructor';

const ELEMENT_DATA: Instructor [] = [
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
  }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  clients: Client[] = [
    {
      "id": 1,
      "name": "Random",
      "surname": "Client#1",
      "age": 28,
      "category": "Bronze"
    },
    {
      "id": 2,
      "name": "Random",
      "surname": "Client#2",
      "age": 28,
      "category": "Silver"
    },
    {
      "id": 3,
      "name": "Random",
      "surname": "Client#3",
      "age": 28,
      "category": "Gold"
    }
  ];
  displayedColumns: string[] = ['id','Name','Surname','Classes']
  dataSource = ELEMENT_DATA;
}
