import { Component, Input } from '@angular/core';
import { Person } from '../people.service';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrl: './conference.component.css'
})

export class PersonCardComponent {
  @Input() person!: Person;
}