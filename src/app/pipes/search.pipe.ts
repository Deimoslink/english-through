import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(array: Array<any>, args?: string): any {
    let patt = new RegExp(args, "i");
    return array.filter( (item) =>
      {return patt.test(JSON.stringify(item.Body) + JSON.stringify(item.Loc))});
  }
}
