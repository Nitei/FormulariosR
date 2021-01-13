import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormPropModel } from '../../../classes/form-prop.model';

@Component( {
  selector: 'app-form-simple',
  templateUrl: './form-simple.component.html',
  styleUrls: [ './form-simple.component.scss' ]
} )
export class FormSimpleComponent implements OnInit {

  @Input() formData: FormGroup;
  public dataButton = new FormPropModel( { classes: 'green', text: 'Botón' } );

  constructor(
  ) {}

  ngOnInit(): void {
  }

  public getFormPropVal( pathNameProp: string[] ): any {
    return this.formData.get( pathNameProp ).value;
  }

}
