import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  heroe: Heroe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) {
    this.activatedRoute.params.subscribe((params: any) => {
      this.heroe = this.heroesService.getHeroe(params.id);
    });
  }

  ngOnInit(): void {}

  getImage(casa: string): string {
    return casa === 'DC'
      ? 'assets/img/dc-logo.jpg'
      : 'assets/img/marvel-logo.png';
  }
}
