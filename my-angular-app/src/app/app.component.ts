import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonCardComponent } from './person-card/person-card.component';
import { PeopleGalleryComponent } from './people-gallery/people-gallery.component';
import { BindingDemoComponent } from './binding-demo/binding-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonCardComponent, PeopleGalleryComponent, BindingDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'World';
  peopleArr = [
    {
      name: "John",
      age: 21
    },
    {
      name: "Emma",
      age: 31
    },
    {
      name: "Kate",
      age: 41
    }
  ];

  // in app.component.ts
  peopleList = [
    { name: 'John', age: 30 },
    { name: 'Kate', age: 45 },
    { name: 'Emma', age: 28 }
  ];
}
