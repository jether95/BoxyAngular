import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/Models/Client';
import { ClientService } from 'src/app/Services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  constructor(private service: ClientService, private router: Router) { }
  clientInsert: Client = new Client();

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.clientInsert);
  }

  createClient(client: Client){
    this.service.addClient(client)
    .subscribe(data => {
      alert("Se agrego el nuevo cliente");
      this.router.navigate(["client"]);
    })
  }

}
