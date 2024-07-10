import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  newTodoTitle = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      const newTodo: Todo = { id: 0, title: this.newTodoTitle, completed: false };
      this.todoService.addTodo(newTodo).subscribe(todo => {
        this.todos.push(todo);
        this.newTodoTitle = '';
      });
    }
  }

  toggleTodoCompletion(todo: Todo): void {
    todo.completed = !todo.completed;
    this.todoService.toggleTodoCompletion(todo).subscribe();
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter(t => t.id !== id);
    });
  }
}
