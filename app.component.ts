import { Component } from '@angular/core';
import { TODO } from './todo';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularApp';

  todoValue: string;
  list: TODO[];

  ngOnInit(){
    this.list = [];
    this.todoValue = '';
  }

  addTodo(){
    if(this.todoValue != ''){
      const newTodo: TODO = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false
      };

      this.list.push(newTodo);
    }
    this.todoValue = '';
  }

  deleteTodo(id: number){
    this.list = this.list.filter(item => item.id !== id);
  }
}
