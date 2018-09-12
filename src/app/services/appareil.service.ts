import {Subject} from 'rxjs';

export class AppareilService {

  appareilsSubject = new Subject<any>();

  private appareils = [
    {
      id: 0,
      name: 'Machine à laver',
      status: false
    },
    {
      id: 1,
      name: 'Frigo',
      status: true
    },
    {
      id: 2,
      name: 'Ordinateur',
      status: false
    }
  ];

  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareils.slice());
  }

  switchOnAll() {
    for (const appareil of this.appareils) {
      appareil.status = true;
    }
    this.emitAppareilSubject();
  }

  switchOffAll() {
    for (const appareil of this.appareils) {
      appareil.status = false;
    }
    this.emitAppareilSubject();
  }

  swapOne(i: number) {
    this.appareils[i].status = !this.appareils[i].status;
    this.emitAppareilSubject();
  }

  getAppareilById(id: number) {
    return this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
  }

  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: this.appareils[(this.appareils.length - 1)].id + 1,
      name: name,
      status: (status === 'true')
    };
    this.appareils.push(appareilObject);
    console.log(this.appareils);
    this.emitAppareilSubject();
  }

}
