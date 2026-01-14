import { Component, computed, EventEmitter, input, Input, Output } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { type UserObj } from './user.model';
import { Card } from "../shared/card/card";

const randonIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input() user!: UserObj;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
