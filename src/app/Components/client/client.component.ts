import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router'; 
import { Client } from 'src/app/Models/Client';
import { ClientService } from 'src/app/Services/client.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit{
  client: Client[];
  constructor(private service: ClientService, private route: Router){}

  ngOnInit(){
    this.service.getClient().subscribe(
      data => {this.client=data}
    )
      
  }

  addClient() {
    this.route.navigate(['/addClient']);
  }


}
