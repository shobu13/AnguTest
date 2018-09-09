export class AppareilService {
  appareils = [
    {
      name: 'Machine à laver',
      status: false
    },
    {
      name: 'Frigo',
      status: true
    },
    {
      name: 'Ordinateur',
      status: false
    }
  ];

  switchOnAll() {
    for (const appareil of this.appareils) {
      appareil.status = true;
    }
  }

  switchOffAll() {
    for (const appareil of this.appareils) {
      appareil.status = false;
    }
  }

  swapOne(i: number) {
    this.appareils[i].status = !this.appareils[i].status;
  }

}
