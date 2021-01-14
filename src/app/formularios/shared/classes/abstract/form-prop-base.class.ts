import { FormPropBaseInterface } from '../../interfaces/form-prop-base.interface';
import { InputLikeType } from '../../types/input-like.type';

export abstract class FormPropBase {
  type: InputLikeType; // Según sea se podrá mostrar un tipo de input u otro
  label: string; // Es el texto de los campos del formulario ej: Nombre: ...
  classes: string; // Un string de clases ej: "big flex ..."

  constructor( obj: FormPropBaseInterface ) {
    if ( !obj ) return;

    this.type = obj.type || '';
    this.label = obj.label || '';
    this.classes = obj.classes || '';
  }
}