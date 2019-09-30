import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeparse'
})
export class TimeparsePipe implements PipeTransform {

  transform(value: any): any {
    let valarr = value.split(":");
    valarr[0] = parseInt(valarr[0]);
    if (valarr[0] > 12) {
      valarr[0] -= 12;
      valarr[2] = "PM";
    } else if (valarr[0] === 12) {
      valarr[2] = "PM";
    } else {
      valarr[2] = "AM";
    }
    return `${valarr[0]}:${valarr[1]} ${valarr[2]}`;
  }

}
