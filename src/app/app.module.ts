import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { DirectiveComponent } from './directives/directive.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ModifierDirective } from './modifier.directive';
import { TodoComponent } from './todo/todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './examples/input/parent/parent.component';
import { Child1Component } from './examples/input/parent/child1/child1.component';
import { Child2Component } from './examples/input/parent/child2/child2.component';
import { Child3Component } from './examples/input/parent/child3/child3.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    MyComponentComponent,
    DirectiveComponent,
    ModifierDirective,
    TodoComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    Child3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
