import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, Booleano: boolean=true): any {
    let contrasena="";
    if(Booleano)
    {
      for(let i=0;i<value.length;i++)
      {
        contrasena+="*";
      }
    }
    else
    {
      contrasena=value;
    }
    return contrasena;
  }

}
