import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './Components/user/user.component';
import { HomeComponent } from './Components/home/home.component';
import { ClientComponent } from './Components/client/client.component';
import { AddClientComponent } from './Components/add-client/add-client.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    ClientComponent,
    AddClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
