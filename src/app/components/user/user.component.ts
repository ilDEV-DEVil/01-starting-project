import { Component, computed, Input, input, output } from '@angular/core';
import User from '../../interfaces/user.model';
import { UiCardComponent } from "../ui-card/ui-card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [UiCardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) id!: string;
  // @Output() selectedId = new EventEmitter<string>();

  @Input({ required: false}) selected? : boolean;
  
  user = input.required<User>();

  selectedId = output<string>();

  // get imagePath(): string {
  //   return `assets/users/${this.avatar}`
  // }

  imagePath = computed(() => {
      return `assets/users/${this.user().avatar}`
  })
  
  
  onSelectUser() {
    this.selectedId.emit(this.user().id);
  };
}
