import { Component, Input, OnInit } from '@angular/core';
import { ArticlesPymesTest } from '@app/core/models/articulo-pymes-test.model';

@Component({
  selector: 'app-cards-article-pymes',
  templateUrl: './cards-article-pymes.component.html',
  styleUrls: ['./cards-article-pymes.component.scss']
})
export class CardsArticlePymesComponent implements OnInit {

  @Input() articulosPymes!: ArticlesPymesTest;
  @Input() indice!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
