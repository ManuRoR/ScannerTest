import { Component } from '@angular/core';
import { ZBar, ZBarOptions } from '@ionic-native/zbar/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  zBarOptions: any = {};
  scannedResult: any = {};

  constructor(private zbar: ZBar) {
    this.zBarOptions = {
      flash: 'off',
      drawSight: false
    };
  }

  scanCode() {
    this.zbar.scan(this.zBarOptions)
    .then(result => {
     this.scannedResult = result;
    })
    .catch(error => {
      alert(error);
    });
  }

}
