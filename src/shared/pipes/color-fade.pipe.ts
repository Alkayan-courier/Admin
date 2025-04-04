import { Pipe, PipeTransform } from '@angular/core';
import * as Color from 'color';

@Pipe({
  name: 'colorFade'
})
export class ColorFadePipe implements PipeTransform {

  transform(value: string, ratio: number): any {
    return Color(value).fade(ratio);
  }

}
