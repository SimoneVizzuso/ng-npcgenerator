import { Injectable } from '@angular/core'
import { Observable, BehaviorSubject, AsyncSubject } from 'rxjs'
import { publishReplay, refCount } from 'rxjs/operators'
import { Descriptor } from 'src/app/classes/descriptor'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  localappearance: string = 'local_appearance';
  private _appearance$: BehaviorSubject<Descriptor[]> = new BehaviorSubject(new Array())
  get appearance$(): Observable<Descriptor[]> { return this._appearance$.asObservable() }

  localtalent: string = 'local_talent';
  private _talents$: BehaviorSubject<Descriptor[]> = new BehaviorSubject(new Array())
  get talents$(): Observable<Descriptor[]> { return this._talents$.asObservable() }

  localraces: string = 'local_races';
  private _races$: BehaviorSubject<Descriptor[]> = new BehaviorSubject(new Array())
  get races$(): Observable<Descriptor[]> { return this._races$.asObservable() }

  _baseUrl: string = "http://localhost:3000/" //todo export

  constructor(private http: HttpClient) {
    this.downloadAppearance();
    this.downloadTalents();
    this.downloadRaces();
  }

  private downloadTalents(){
    this.http.get<Descriptor[]>(this._baseUrl + "talents").subscribe(
      (res: Descriptor[]) => {
        console.log('Talents - Connected: download resources..')
        localStorage.setItem(this.localtalent, JSON.stringify(res))
        let talents: Descriptor[] = new Array<Descriptor>()
        res.forEach(x => {
          talents.push(new Descriptor(x.id, x.description))
        })
        this._talents$.next(talents)
      },
      err => {
        console.log('Talents - Disconnected: using local resource')
        let talents: Descriptor[] = new Array<Descriptor>()
        let res: Descriptor[] = JSON.parse(localStorage.getItem(this.localtalent))
        res.forEach(x => {
          x.id + " " + x.description
          talents.push(new Descriptor(x.id, x.description))
        })
        this._talents$.next(talents)
      }
    )
  }

  private downloadAppearance(){
    this.http.get<Descriptor[]>(this._baseUrl + "appearance").subscribe(
      (res: Descriptor[]) => {
        console.log('Appearance - Connected: download resources..')
        localStorage.setItem(this.localappearance, JSON.stringify(res))
        let appearance: Descriptor[] = new Array<Descriptor>()
        res.forEach(x => {
          appearance.push(new Descriptor(x.id, x.description))
        })
        this._appearance$.next(appearance)
      },
      err => {
        console.log('Appearance - Disconnected: using local resource')
        let appearance: Descriptor[] = new Array<Descriptor>()
        let res: Descriptor[] = JSON.parse(localStorage.getItem(this.localappearance))
        res.forEach(x => {
          x.id + " " + x.description
          appearance.push(new Descriptor(x.id, x.description))
        })
        this._appearance$.next(appearance)
      }
    )
  }

  private downloadRaces(){
    this.http.get<Descriptor[]>(this._baseUrl + "races").subscribe(
      (res: Descriptor[]) => {
        console.log('Races - Connected: download resources..')
        localStorage.setItem(this.localraces, JSON.stringify(res))
        let races: Descriptor[] = new Array<Descriptor>()
        res.forEach(x => {
          races.push(new Descriptor(x.id, x.description))
        })
        this._races$.next(races)
      },
      err => {
        console.log('Races - Disconnected: using local resource')
        let races: Descriptor[] = new Array<Descriptor>()
        let res: Descriptor[] = JSON.parse(localStorage.getItem(this.localraces))
        res.forEach(x => {
          x.id + " " + x.description
          races.push(new Descriptor(x.id, x.description))
        })
        this._races$.next(races)
      }
    )
  }
}