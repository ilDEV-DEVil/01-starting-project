import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() closeDialog = new EventEmitter<boolean>();

  private tasksService = inject(TasksService);

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';
  

  onCloseDialog() {
    this.closeDialog.emit(true);
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate
      },
      this.userId
    )
  }
}
