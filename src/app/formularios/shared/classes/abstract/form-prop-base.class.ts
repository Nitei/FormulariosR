import { FormPropBaseInterface } from '../../interfaces/form-prop-base.interface';

export abstract class FormPropBase {
  type: string;
  text: string;
  classes: string;

  constructor( obj: FormPropBaseInterface ) {
    if ( !obj ) return;

    this.type = obj.type || '';
    this.text = obj.text || '';
    this.classes = obj.classes || '';
  }
}