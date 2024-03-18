import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html'
})

export class MainPageComponent  {

  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000
  }, {
    name: 'Goku',
    power: 2000
  }, {
    name: 'Otto',
    power: 3000
  }]

  onNewCharacter(character: Character):void{
    console.log('Main page')
    console.log(character)
    this.characters.push(character)
  }

  onDeleteCharacter(index:number):void{
    console.log('Main page borrado')
    console.log(index)
    this.characters.splice(index)
  }
}
