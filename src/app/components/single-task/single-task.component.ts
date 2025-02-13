import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../interfaces/task.model';

@Component({
  selector: 'app-single-task',
  standalone: true,
  imports: [],
  templateUrl: './single-task.component.html',
  styleUrl: './single-task.component.css'
})
export class SingleTaskComponent {
  @Input({required: true}) task!: Task;

  @Output() completed = new EventEmitter();

  onCompleted() {
    this.completed.emit(this.task.id);
  }
}
