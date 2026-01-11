import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { User } from "./user/user";
import { DUMMY_USERS } from './user/dummy-users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  user = DUMMY_USERS;

  onSelectUser(id: string){
    console.log("user Clicked" + id);
  }
  
}
