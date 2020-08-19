import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css'],
})
export class HeroeCardComponent implements OnInit {
  @Input() heroe: Heroe;
  @Input() id: number;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  verHeroe(): void {
    this.router.navigate(['/heroe', this.id]);
  }
}
