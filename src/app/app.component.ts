import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { TasksComponent } from './components/tasks/tasks.component';
import { UserComponent } from "./components/user/user.component";
import { DUMMY_USERS } from './dummy-users';
import User from './interfaces/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
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
