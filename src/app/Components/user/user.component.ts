import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  user: User[];
  constructor(private service: UserService, private router: Router){ }

  ngOnInit(){
    this.service.getUser().subscribe(data =>{this.user = data;})    
  }

}
