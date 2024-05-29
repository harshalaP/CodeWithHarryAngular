import { Component,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss'
})
export class AddTodoComponent {
title:String;
desc:String;
@Output() todoAdd : EventEmitter<Todo> = new EventEmitter();

onSubmit(){
  const todo = {
    sno: 8,
    title:this.title,
    desc:this.desc,
    active:true
  }
  this.todoAdd.emit(todo);
}

}
