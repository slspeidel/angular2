import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sls-another',
  template: `
    <h1>Amazing!</h1>
    <p>
      <ng-content></ng-content>
    </p>
  `,
  styles: [`
    h1 {
      color: red;
    }
    p {
      color: blue;
    }
  `]
})
export class SlsAnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
