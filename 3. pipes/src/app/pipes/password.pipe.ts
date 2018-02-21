import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: any, aster: boolean = true): string {
    if (aster) {
      let cod = "";
      for (let i in value) {
        cod = cod + "*";
      }
      return cod;
    }

    return value;
  }

}
