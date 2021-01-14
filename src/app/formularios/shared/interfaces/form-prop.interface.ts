import { FormPropBaseInterface } from './form-prop-base.interface';

export interface FormPropInterface extends FormPropBaseInterface {
  /**@description Es el valor de la propiedad en un input o select */
  valor?: string;
}
