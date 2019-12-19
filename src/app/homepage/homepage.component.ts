import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, observable } from 'rxjs';
import { Descriptor } from '../classes/descriptor';
import { HomepageService } from './service/homepage.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  appearance$: Observable<Descriptor[]>
  talent$: Observable<Descriptor[]>
  race$: Observable<Descriptor[]>
  gender$: Observable<Descriptor[]>
  maleName$: Observable<Descriptor[]>
  femaleName$: Observable<Descriptor[]>
  show: boolean = false;

  rngAppearance: number = getRandomArbitrary(0, 1)
  rngTalent: number = getRandomArbitrary(0, 1)
  rngRace: number = getRandomArbitrary(0, 1)
  rngGender: number = getRandomArbitrary(0, 1)
  rngMaleNames: number = getRandomArbitrary(0, 1)
  rngFemaleNames: number = getRandomArbitrary(0, 1)
  rngAge: number = getRandomArbitrary(0, 1)

  constructor(private homepageService: HomepageService) { }

  ngOnInit() {
    this.appearance$ = this.homepageService.appearance$
    this.talent$ = this.homepageService.talent$
    this.race$ = this.homepageService.race$
    this.gender$ = this.homepageService.gender$
    this.maleName$ = this.homepageService.maleName$
    this.femaleName$ = this.homepageService.femaleName$
  }

  random(){
    this.rngAppearance = getRandomArbitrary(0, 19)
    this.rngTalent = getRandomArbitrary(0, 19)
    this.rngRace = getRandomArbitrary(0, 35)
    this.rngGender = getRandomArbitrary(0, 1)
    this.rngMaleNames = getRandomArbitrary(0, 149)
    this.rngFemaleNames = getRandomArbitrary(0, 149)
    this.rngAge = getRandomArbitrary(15, 70)
    this.show = true
  }
}

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
