import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() closeDialog = new EventEmitter<boolean>();

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';
  

  onCloseDialog() {
    this.closeDialog.emit(true);
  }
}
