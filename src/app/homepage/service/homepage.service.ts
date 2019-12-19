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
  private _talent$: BehaviorSubject<Descriptor[]> = new BehaviorSubject(new Array())
  get talent$(): Observable<Descriptor[]> { return this._talent$.asObservable() }

  localrace: string = 'local_race';
  private _race$: BehaviorSubject<Descriptor[]> = new BehaviorSubject(new Array())
  get race$(): Observable<Descriptor[]> { return this._race$.asObservable() }

  localgender: string = 'local_gender';
  private _gender$: BehaviorSubject<Descriptor[]> = new BehaviorSubject(new Array())
  get gender$(): Observable<Descriptor[]> { return this._gender$.asObservable() }

  localmaleName: string = 'local_maleName';
  private _maleName$: BehaviorSubject<Descriptor[]> = new BehaviorSubject(new Array())
  get maleName$(): Observable<Descriptor[]> { return this._maleName$.asObservable() }

  localfemaleName: string = 'local_femaleName';
  private _femaleName$: BehaviorSubject<Descriptor[]> = new BehaviorSubject(new Array())
  get femaleName$(): Observable<Descriptor[]> { return this._femaleName$.asObservable() }

  _baseUrl: string = "http://localhost:3000/" //todo export

  constructor(private http: HttpClient) {
    this.downloadAppearance();
    this.downloadTalent();
    this.downloadRace();
    this.downloadGender();
    this.downloadMaleName();
    this.downloadFemaleName();
  }

  private downloadTalent(){
    this.http.get<Descriptor[]>(this._baseUrl + "talents").subscribe(
      (res: Descriptor[]) => {
        console.log('Talent - Connected: download resources..')
        localStorage.setItem(this.localtalent, JSON.stringify(res))
        let talent: Descriptor[] = new Array<Descriptor>()
        res.forEach(x => {
          talent.push(new Descriptor(x.id, x.description))
        })
        this._talent$.next(talent)
      },
      err => {
        console.log('Talent - Disconnected: using local resource')
        let talent: Descriptor[] = new Array<Descriptor>()
        let res: Descriptor[] = JSON.parse(localStorage.getItem(this.localtalent))
        res.forEach(x => {
          talent.push(new Descriptor(x.id, x.description))
        })
        this._talent$.next(talent)
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
          appearance.push(new Descriptor(x.id, x.description))
        })
        this._appearance$.next(appearance)
      }
    )
  }

  private downloadRace(){
    this.http.get<Descriptor[]>(this._baseUrl + "races").subscribe(
      (res: Descriptor[]) => {
        console.log('Race - Connected: download resources..')
        localStorage.setItem(this.localrace, JSON.stringify(res))
        let race: Descriptor[] = new Array<Descriptor>()
        res.forEach(x => {
          race.push(new Descriptor(x.id, x.description))
        })
        this._race$.next(race)
      },
      err => {
        console.log('Race - Disconnected: using local resource')
        let race: Descriptor[] = new Array<Descriptor>()
        let res: Descriptor[] = JSON.parse(localStorage.getItem(this.localrace))
        res.forEach(x => {
          race.push(new Descriptor(x.id, x.description))
        })
        this._race$.next(race)
      }
    )
  }

  private downloadGender(){
    this.http.get<Descriptor[]>(this._baseUrl + "gender").subscribe(
      (res: Descriptor[]) => {
        console.log('Gender - Connected: download resources..')
        localStorage.setItem(this.localgender, JSON.stringify(res))
        let gender: Descriptor[] = new Array<Descriptor>()
        res.forEach(x => {
          gender.push(new Descriptor(x.id, x.description))
        })
        this._gender$.next(gender)
      },
      err => {
        console.log('Gender - Disconnected: using local resource')
        let gender: Descriptor[] = new Array<Descriptor>()
        let res: Descriptor[] = JSON.parse(localStorage.getItem(this.localgender))
        res.forEach(x => {
          gender.push(new Descriptor(x.id, x.description))
        })
        this._gender$.next(gender)
      }
    )
  }

  private downloadMaleName(){
    this.http.get<Descriptor[]>(this._baseUrl + "maleNames").subscribe(
      (res: Descriptor[]) => {
        console.log('MaleName - Connected: download resources..')
        localStorage.setItem(this.localmaleName, JSON.stringify(res))
        let maleName: Descriptor[] = new Array<Descriptor>()
        res.forEach(x => {
          maleName.push(new Descriptor(x.id, x.description))
        })
        this._maleName$.next(maleName)
      },
      err => {
        console.log('MaleName - Disconnected: using local resource')
        let maleName: Descriptor[] = new Array<Descriptor>()
        let res: Descriptor[] = JSON.parse(localStorage.getItem(this.localmaleName))
        res.forEach(x => {
          maleName.push(new Descriptor(x.id, x.description))
        })
        this._maleName$.next(maleName)
      }
    )
  }

  private downloadFemaleName(){
    this.http.get<Descriptor[]>(this._baseUrl + "femaleNames").subscribe(
      (res: Descriptor[]) => {
        console.log('FemaleName - Connected: download resources..')
        localStorage.setItem(this.localfemaleName, JSON.stringify(res))
        let femaleName: Descriptor[] = new Array<Descriptor>()
        res.forEach(x => {
          femaleName.push(new Descriptor(x.id, x.description))
        })
        this._femaleName$.next(femaleName)
      },
      err => {
        console.log('FemaleName - Disconnected: using local resource')
        let femaleName: Descriptor[] = new Array<Descriptor>()
        let res: Descriptor[] = JSON.parse(localStorage.getItem(this.localfemaleName))
        res.forEach(x => {
          femaleName.push(new Descriptor(x.id, x.description))
        })
        this._femaleName$.next(femaleName)
      }
    )
  }
}