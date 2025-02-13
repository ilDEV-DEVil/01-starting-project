import { Component, Input } from '@angular/core';
import { Task } from '../../interfaces/task.model';
import { UiCardComponent } from "../ui-card/ui-card.component";

@Component({
  selector: 'app-single-task',
  standalone: true,
  imports: [UiCardComponent],
  templateUrl: './single-task.component.html',
  styleUrl: './single-task.component.css'
})
export class SingleTaskComponent {
  @Input({required: true}) task!: Task;

}