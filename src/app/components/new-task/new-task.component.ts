import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../../interfaces/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() closeDialog = new EventEmitter<boolean>();
  @Output() newTask = new EventEmitter<NewTask>();

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';
  

  onCloseDialog() {
    this.closeDialog.emit(true);
  }

  onSubmit() {
    this.newTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    })
    
  }
}
