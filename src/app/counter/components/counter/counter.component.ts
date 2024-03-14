import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h4>Hola Counter</h4>
  <h3>Counter: {{counter}}</h3>


<button (click)="increment()">+1</button>
<button (click)="decrement()">-1</button>
<button (click)="increaseBy(9)">+9</button>
<button (click)="reset()">Reset Counter</button>

  `
})

export class CounterComponent implements OnInit {


  public counter: number = 0;


  public increment(): void {
    this.counter++;
  }

  public decrement(): void{
    this.counter--;
  }

  public increaseBy(n: number): void {
    this.counter += n;
  }

  reset(){
    this.counter = 0;
  }
  constructor() { }

  ngOnInit() { }
}
