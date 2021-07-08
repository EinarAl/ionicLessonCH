import { Component } from '@angular/core';
import arr from './myPerson';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  personArr: any[] = arr;
  constructor() {}

  
}
