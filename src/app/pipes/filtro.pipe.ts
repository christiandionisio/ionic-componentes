import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[],
            texto: string = '',
            columna: string = 'title'
            ): any[] {

    // console.log(arreglo);
    // console.log(texto);
    if (texto === '' || texto === 'todos') {
      return arreglo;
    }

    if (!arreglo) {
      return arreglo;
    }

    texto = texto.toLowerCase();

    return arreglo.filter(
      item => item[columna].toLowerCase().includes(texto)
    );


    return null;
  }

}
