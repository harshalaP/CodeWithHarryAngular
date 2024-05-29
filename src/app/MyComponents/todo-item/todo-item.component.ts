import { Component,Input, Output, EventEmitter } from '@angular/core';
import { Todo } from "../../todo";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {

  @Input() todo : Todo;
  @Input() i : Number;
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox : EventEmitter<Todo> = new EventEmitter();

  onClick(todo:Todo){

    this.todoDelete.emit(todo);
    console.log("On click triggered");
  }

  onCheckBoxClick(todo:Todo){
    this.todoCheckBox.emit(todo);
    console.log("onCheckBoxClick : ",todo)
  }

}
