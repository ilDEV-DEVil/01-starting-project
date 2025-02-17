import { Component, Input } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { NewTaskComponent } from "../new-task/new-task.component";
import { SingleTaskComponent } from '../single-task/single-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [SingleTaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  constructor( private tasksService: TasksService ) {}
  
  @Input({ required: true}) userId!: string;
  @Input({ required: true }) userName!: string;

  showDialog: boolean = false;


  get selectedUserTask() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onAddNewTask() {
    this.showDialog = true;
  }

  onClosingDialog(isClosing: boolean) {
    this.showDialog = !isClosing;
  }
}
