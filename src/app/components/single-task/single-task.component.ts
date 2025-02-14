import { Component, inject, Input } from '@angular/core';
import { Task } from '../../interfaces/task.model';
import { UiCardComponent } from "../ui-card/ui-card.component";
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-single-task',
  standalone: true,
  imports: [UiCardComponent],
  templateUrl: './single-task.component.html',
  styleUrl: './single-task.component.css'
})
export class SingleTaskComponent {
  @Input({required: true}) task!: Task;

  private tasksService = inject(TasksService);
  
  onCompleted() {
    this.tasksService.removeTask(this.task.id);
  }

}