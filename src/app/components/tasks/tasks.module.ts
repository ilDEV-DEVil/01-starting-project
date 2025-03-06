import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { SingleTaskComponent } from "./single-task/single-task.component";

@NgModule({
    declarations: [
        TasksComponent,
        NewTaskComponent,
        SingleTaskComponent,
    ],
    exports: [TasksComponent],
})
export class TasksModule {};