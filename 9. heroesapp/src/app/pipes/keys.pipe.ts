import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  pure:false //Pendiente de los cambios, se hace para que una vez se elimina una fila no de error porque no encuentra el objeto eliminado
})
export class KeysPipe implements PipeTransform {

  transform(value: any): any {

    let keys = [];
    for(let key in value) {
      keys.push(key);
    }
    return keys;
  }

}
