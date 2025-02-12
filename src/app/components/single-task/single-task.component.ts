import { Component, Input } from '@angular/core';
import Task from '../../interfaces/task.model';

@Component({
  selector: 'app-single-task',
  standalone: true,
  imports: [],
  templateUrl: './single-task.component.html',
  styleUrl: './single-task.component.css'
})
export class SingleTaskComponent {
  @Input() task: Task = {
    id: "",
    userId: "",
    title: "",
    summary: "",
    dueDate: ""
  }
}
