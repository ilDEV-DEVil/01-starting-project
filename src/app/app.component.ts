import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import User from './interfaces/user.model';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  users = DUMMY_USERS;

  selectedUserId?: string;

  get selectedUser(): User {
    return this.users.find(user => user.id === this.selectedUserId)!
  }

  handleUserSelected(id: string) {
    this.selectedUserId = id;
  }
}
