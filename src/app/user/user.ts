import { Component, computed, EventEmitter, input, Input, Output } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

const randonIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  @Input() id!: string;
  @Input() avatar!: string;
  @Input() name!: string;
  @Output() select = new EventEmitter();
  //select = output<string>() -> internally creates EventEmitter (string as we are emitting id in onSelectUser())

  get imagePath() {
    return 'assets/users/' + this.avatar
  }

  onSelectUser(){
    this.select.emit(this.id);
  }

}
