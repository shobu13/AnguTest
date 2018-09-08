import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: String = 'banane !';

  appareilStatus: String = 'éteint';

  constructor() { }

  ngOnInit() {
  }

  getStatus(){
    return this.appareilStatus;
  }

}
