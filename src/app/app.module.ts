import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { NewTaskComponent } from "./components/new-task/new-task.component";
import { SingleTaskComponent } from "./components/single-task/single-task.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { UserComponent } from "./components/user/user.component";
import { SharedModule } from "./components/shared/shared.module";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent,
        TasksComponent,
        SingleTaskComponent,
        NewTaskComponent,        
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        SharedModule,
    ]
})

export class AppModule {};