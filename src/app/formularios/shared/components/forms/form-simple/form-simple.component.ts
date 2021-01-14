import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component( {
  selector: 'app-form-simple',
  templateUrl: './form-simple.component.html',
  styleUrls: [ './form-simple.component.scss' ]
} )
export class FormSimpleComponent implements OnInit {

/**
 * @description Es el formulario
 */
  @Input() formData: FormGroup;

  constructor(
  ) {}

  ngOnInit(): void {
  }

/**
 * @description Consigue el valor de una propiedad del formulario
 */
  public getFormPropVal( pathNameProp: string[] ): any {
    return this.formData.get( pathNameProp ).value;
  }

}
