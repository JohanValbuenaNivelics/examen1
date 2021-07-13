import { Component, Input, OnInit } from '@angular/core';
import { Testimony } from '@app/core/models/testimony.model';

@Component({
  selector: 'app-testimony-card',
  templateUrl: './testimony-card.component.html',
  styleUrls: ['./testimony-card.component.scss']
})
export class TestimonyCardComponent implements OnInit {

  @Input() testimonio!: Testimony;
  
  constructor() { }

  ngOnInit(): void {
  }

}
