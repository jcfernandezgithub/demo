import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  books: any[];

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
  }

  getBooks() {
    return this.db.list('/books').valueChanges().subscribe(data => {
      console.log(data);
      this.books = data;
    });
  }

}
