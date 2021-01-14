import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component( {
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: [ './input.component.scss' ]
} )
export class InputComponent implements OnInit, AfterViewChecked {

  /**
   * @description se le pasa el formulario base
   */
  @Input() formData: FormGroup;

  /**
   * @description se le pasa un array de strings que será el path que enlazará
   *  la propiedad del formulario al input
   * @example ['individualTravelAsistance', 'name']
   */
  @Input() formPropPathArr: string[];

  /**
   * @description Se calcula un id unico con Math.Random para cenlazar los campos del fomulario al input
   */
  public uniqueId: number;

  constructor(
  ) {
    this.uniqueId = Math.random() * Math.random();
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.initializeInputValue();
  }

  /**
   * @description Se inicializa el valor del input con el valor de la propiedad del path del formulario
   */
  private initializeInputValue(): void {
    const input = document.getElementById( `${ this.uniqueId }` )
    if ( input ) {
      input[ 'value' ] = this.formData.get( [ ...this.formPropPathArr, 'valor' ] ).value
    }
  }

  /**
   * @description Llamada en cada evento de "keyup" sobre un input actualiza el valor del formulario
   * en el path especificado
   * @param newValue Es el evento de teclado del cual se recoje el valor actual del input
   */
  public updateValue( newValue: KeyboardEvent ): void {
    if ( this.formData ) {
      this.formData.get( [ ...this.formPropPathArr, 'valor' ] ).setValue( newValue.target[ 'value' ] );
    }
  }

  /**
   * @description conseguimos las clases del campo del formulario
   * @returns Un string de clases
   */
  public getFormClass(): string {
    return this.formData.get( [ ...this.formPropPathArr, 'classes' ] ).value;
  }

  /**
   * @description conseguimos los textos del campo del formulario
   * @returns Un string de Texto 
   */
  public getFormText(): string {
    return this.formData.get( [ ...this.formPropPathArr, 'label' ] ).value;
  }

}
