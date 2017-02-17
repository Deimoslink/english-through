import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy',
  pure: false
})
export class SortByPipe implements PipeTransform {

  transform(array: Array<any>, options?: {Field:string}, reverse?: boolean ): Array<any> {
    if (options) {
      if (!reverse) {
        array.sort((a: any, b: any) => {
          if (a[options.Field] > b[options.Field]) {
            return -1;
          } else if (a[options.Field] < b[options.Field]) {
            return 1;
          } else {
            return 0;
          }
        });
      } else {
        array.sort((a: any, b: any) => {
          if (a[options.Field] < b[options.Field]) {
            return -1;
          } else if (a[options.Field] > b[options.Field]) {
            return 1;
          } else {
            return 0;
          }
        });
      }
      return array;
    } else {
      return array;
    }

  }

}
