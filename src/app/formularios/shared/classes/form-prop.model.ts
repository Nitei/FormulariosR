import { FormPropBase } from "./abstract/form-prop-base.class";
import { FormPropInterface } from '../interfaces/form-prop.interface';

export class FormPropModel extends FormPropBase {
  valor: any; // Es el valor del campo del formulario en un input u otro componente
  
  constructor( obj: FormPropInterface ) {
    if ( !obj ) return;

    super( obj )

    this.valor = obj.valor || '';
  }
}