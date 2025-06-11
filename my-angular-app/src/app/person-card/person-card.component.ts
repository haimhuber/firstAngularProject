import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-person-card',
  standalone: true,
  imports: [],
  templateUrl: './person-card.component.html',
  styleUrl: './person-card.component.css'
})
export class PersonCardComponent {
  @Input() name!: string;
  @Input() age!: number;

  ngOnInit() {
    console.log("The person is ", this.name, this.age);

  }

}
