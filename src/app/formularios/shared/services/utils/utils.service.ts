import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class UtilsService {

  private masterForm: FormGroup;

  constructor() {
  }

  // initMasterForm( formBase: FormGroup ) {
  //   this.masterForm = formBase;
  //   this.masterForm.valueChanges.subscribe( e => console.log( 'Formulario en servicio', e ) )
  // }

  getMasterForm(): FormGroup {
    return this.masterForm;
  }

  // updateMasterForm( formUpdated: any ) {
  //   if ( this.masterForm ) {
  //     const currentValue = this.masterForm.value
      // this.masterForm = ;
  //   }
  // }
}
