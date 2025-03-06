import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "./components/header/header.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { UserComponent } from "./components/user/user.component";
import { FormsModule } from "@angular/forms";
import { UiCardComponent } from "./components/ui-card/ui-card.component";
import { NewTaskComponent } from "./components/new-task/new-task.component";
import { SingleTaskComponent } from "./components/single-task/single-task.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent,
        TasksComponent,
        UiCardComponent,
        SingleTaskComponent,
        NewTaskComponent,        
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule
    ]
})

export class AppModule {};