import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { SharedModule } from "./components/shared/shared.module";
import { UserComponent } from "./components/user/user.component";
import { TasksModule } from "./components/tasks/tasks.module";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent,        
    ],
    imports: [
        BrowserModule,
        FormsModule,
        SharedModule,
        TasksModule
    ],
    bootstrap: [AppComponent],
})
export class AppModule {};