import { Component, computed, input, Input } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

const randonIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  //input Signal and also can access in html as avatar(), name(), iamgePath() is,
  //input signal is read only so cant change as we do for signal
  // avatar = input<string>()
  //name = input<string<()
  // imagePath = computed(()=>{
  //   return 'assets/users/' + this.avatar()
  // })
  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath() {
    return 'assets/users/' + this.avatar
  }

  onSelectUser(){
    
  }

}
