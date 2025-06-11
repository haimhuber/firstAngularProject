import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-people-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people-gallery.component.html',
  styleUrls: ['./people-gallery.component.css']
})

export class PeopleGalleryComponent {
  @Input() peopleArr: { name: string; age: number; }[] = [];
}
