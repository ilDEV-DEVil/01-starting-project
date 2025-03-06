import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { SingleTaskComponent } from "./single-task/single-task.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        TasksComponent,
        NewTaskComponent,
        SingleTaskComponent,
    ],
    exports: [TasksComponent],
    imports: [FormsModule, SharedModule]
})
export class TasksModule {};