import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Descriptor } from '../classes/descriptor';
import { HomepageService } from './service/homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  appearance$: Observable<Descriptor[]>
  talents$: Observable<Descriptor[]>
  races$: Observable<Descriptor[]>
  show: boolean = false;

  rngAppearance: number = getRandomArbitrary(1, 20)
  rngTalents: number = getRandomArbitrary(1, 20)
  rngRaces: number = getRandomArbitrary(1, 36)

  constructor(private homepageService: HomepageService) { }

  ngOnInit() {
    this.appearance$ = this.homepageService.appearance$
    this.talents$ = this.homepageService.talents$
    this.races$ = this.homepageService.races$
  }

  random(){
    this.rngAppearance = getRandomArbitrary(1, 20)
    this.rngTalents = getRandomArbitrary(1, 20)
    this.rngRaces = getRandomArbitrary(1, 36)
    this.show = true
  }
}

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
