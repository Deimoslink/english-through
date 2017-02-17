import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(array: Array<any>, filterConditions: Array<boolean>): any {
    return array.filter( item => !filterConditions[0] || item.Personal)
                .filter( item => !filterConditions[1] || item.Night)
                .filter( item => !filterConditions[2] || item.Urgent);
  }

}
