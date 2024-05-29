import { Component, afterNextRender } from '@angular/core';
import { Todo } from '../../todo';
import { NgFor,NgIf } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor,NgIf,TodoItemComponent, AddTodoComponent,RouterModule,RouterLink],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})

export class TodosComponent {

    todos:Todo[];
    localItem: string;
    constructor(){
      console.log("constructor");
      this.localItem = JSON.parse(localStorage.getItem('todos') as any);
      if(this.localItem === null){
        this.todos = [];
        console.log("In if");
      }
      else{
        this.todos = JSON.parse(localStorage.getItem('todos')!);
      }
    }

    deleteTodo(todo:Todo){

      console.log("deleteTodo: Todos-todo",todo);
      const index = this.todos.indexOf(todo);
      console.log("deleteTodo: index",index);
      this.todos.splice(index,1); //delete 1 element from given index
      localStorage.setItem("todos",JSON.stringify(this.todos));
    }

    addTodo(todo:Todo){

      console.log("addTodo: Todos-todo",todo);
      this.todos.push(todo); //add todo to array
      localStorage.setItem("todos",JSON.stringify(this.todos));
    }

    toggleTodo(todo:Todo){
      console.log("toggleTodo : ",todo)
      const index = this.todos.indexOf(todo);
      this.todos[index].active = !this.todos[index].active; 
      localStorage.setItem("todos",JSON.stringify(this.todos));
    }
    

}
