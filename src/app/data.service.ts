import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  info1: string[] = ['John', 'E1', 'jn@abc.com'];
  info2: string[] = ['Rob', 'E2', 'rb@abc.com'];
  info3: string[] = ['Will', 'E3', 'wl@abc.com'];
  // info: string[] = [];
  getInfo1(): string[] {
    return this.info1;
  }
  getInfo2(): string[] {
    return this.info2;
  }
  getInfo3(): string[] {
    return this.info3;
  }
  addInfo(info: string) {
    this.info1.push(info);
    this.info2.push(info);
    this.info3.push(info);
    return this.info1;
  }
  constructor() {}
}
