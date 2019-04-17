import { Component } from '@angular/core';
import { Client } from '../client.model';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent {

  nClient = new Client();

  constructor(private db: AngularFireDatabase){}

  createClient(client: Client){
    return this.db.list('/clients').push(client);
  }
}
