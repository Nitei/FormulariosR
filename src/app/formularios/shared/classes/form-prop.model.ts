import { FormPropBase } from "./abstract/form-prop-base.class";
import { FormPropInterface } from '../interfaces/form-prop.interface';

export class FormPropModel extends FormPropBase {
  valor: any;
  
  constructor( obj: FormPropInterface ) {
    if ( !obj ) return;

    super( obj )

    this.valor = obj.valor || '';
  }
}