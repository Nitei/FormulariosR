import { InputLikeType } from '../types/input-like.type';
export interface FormPropBaseInterface {
  type?: InputLikeType; // Según sea se podrá mostrar un tipo de input u otro
  label?: string; // Es el texto de los campos del formulario ej: Nombre: ...
  classes?: string; // Un string de clases ej: "big flex ..."
}