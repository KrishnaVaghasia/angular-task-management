import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

const randonIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  selectedUser = DUMMY_USERS[randonIndex];

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar
  }

  onSelectUser(){
    const randonIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randonIndex];
  }

}
