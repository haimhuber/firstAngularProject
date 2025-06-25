import { Component } from '@angular/core';
import { products } from '../../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-gallery',
  standalone: true, // Only if this is a standalone component
  imports: [CommonModule],
  templateUrl: './products-gallery.html',
  styleUrls: ['./products-gallery.css']
})
export class ProductsGallery {
  product = products;
}
