// import { Component, computed, signal } from '@angular/core';
// import { DUMMY_USERS } from './dummy-users';

// const randonIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// @Component({
//   selector: 'app-user-signal',
//   imports: [],
//   templateUrl: './user.html',
//   styleUrl: './user.css',
// })
// export class UserSignal {
//   selectedUser = signal(DUMMY_USERS[randonIndex]);
//   imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
// name: any;

//   //need to use computed if we are using signal.
//   // get imagePath() {
//   //   return 'assets/users/' + this.selectedUser.avatar
//   // }

//   onSelectUser(){
//     const randonIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser.set(DUMMY_USERS[randonIndex]);
//   }

// }
