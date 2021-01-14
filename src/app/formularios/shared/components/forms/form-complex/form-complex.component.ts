import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component( {
  selector: 'app-form-complex',
  templateUrl: './form-complex.component.html',
  styleUrls: [ './form-complex.component.scss' ]
} )
export class FormComplexComponent implements OnInit {

  /**
   * @description Es el formulario
   */
  @Input() formData: FormGroup;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  /**
   * @description Consigue el valor de una propiedad del formulario
   */
  public getFormPropVal( pathNameProp: string[] ): any {
    return this.formData.get( pathNameProp ).value;
  }

}
