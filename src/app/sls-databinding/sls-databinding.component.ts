import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sls-databinding',
  templateUrl: './sls-databinding.component.html',
  styles: [`
    h1 {
      color: red;
    }
    p {
      color: blue;
    }
  `]
})
export class SlsDatabindingComponent {
  stringInterpolation = "This is the inerpolated string.";
  numberInterpolation = 3;

}
