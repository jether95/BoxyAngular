import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './Components/user/user.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ClientComponent } from './Components/client/client.component';
import { AddClientComponent } from './Components/add-client/add-client.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'user', component: UserComponent },
  { path: 'client', component: ClientComponent },
  { path: 'addClient', component: AddClientComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
