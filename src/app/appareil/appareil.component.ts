import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: String = 'banane !';
  @Input() appareilStatus = false;
  @Input() index: number;
  @Input() id: number;

  constructor(private appareilService: AppareilService) {
  }

  ngOnInit() {
  }

  getStatus() {
    if (this.appareilStatus) {
      return 'allumé';
    } else {
      return 'éteint';
    }
  }

  getColor() {
    if (this.appareilStatus === true) {
      return 'green';
    } else {
      return 'red';
    }
  }

  onSwitch() {
    this.appareilService.swapOne(this.index);
  }

}
