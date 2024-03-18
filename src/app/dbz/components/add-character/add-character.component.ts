import { Component, EventEmitter, Output } from '@angular/core';


import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  onNewCharacter : EventEmitter<Character> = new EventEmitter();

  character : Character = {
    name: '',
    power: 0
  }

  emitCharacter():void{

    //debugger;

    if(this.character.name.length < 1 || this.character.power< 0){
      return;
    }

    this.onNewCharacter.emit(this.character);
    // Reset the form after emitting
    console.log(this.character);

    this.character = {
      name: '',
      power: 0
    }
  }
}
