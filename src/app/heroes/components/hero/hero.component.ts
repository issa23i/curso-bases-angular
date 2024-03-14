import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {


  public name: string = 'Ironman';
  public age: number = 35;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(change : string):void{
    this.name = change;
  }

  changeAge(change : number):void{
    this.age = change;
  }

  resetForm(): void {
    this.name = 'Ironman';
    this.age = 35;
  }

}
