import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoListComponent } from 'src/components/to-do-list/to-do-list.component'

const routes: Routes = [
  { path: 'todolist' ,component: ToDoListComponent },
  { path: '' , component: ToDoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
