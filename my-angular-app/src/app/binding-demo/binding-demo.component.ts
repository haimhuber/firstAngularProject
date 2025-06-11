import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './binding-demo.component.html',
  styleUrls: ['./binding-demo.component.css']
})


export class BindingDemoComponent {
  username: string = 'John';
  imageUrl: string = 'https://images.pexels.com/photos/6930805/pexels-photo-6930805.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load';
  isActive: boolean = true;
  isError: boolean = false;

  sayHello() {
    alert('Hello ' + this.username + '!');
  }
}