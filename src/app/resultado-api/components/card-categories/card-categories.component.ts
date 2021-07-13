import { Component, Input, OnInit } from '@angular/core';
import { Category } from '@app/core/models/category.model';

@Component({
  selector: 'app-card-categories',
  templateUrl: './card-categories.component.html',
  styleUrls: ['./card-categories.component.scss']
})
export class CardCategoriesComponent implements OnInit {

  @Input() categoria!: Category;

  constructor() { }

  ngOnInit(): void {
  }

}
