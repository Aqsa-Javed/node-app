import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { TodoComponent } from './components/todo/todo.component';


const routes: Routes = [
{ path: "", component: LoginPageComponent},
{ path: 'todo', component: TodoComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
