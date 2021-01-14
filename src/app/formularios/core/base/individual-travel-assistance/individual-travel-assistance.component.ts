import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { takeUntil, tap } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { FormPropModel } from '../../../shared/classes/form-prop.model';

@Component( {
  selector: 'app-individual-travel-assistance',
  templateUrl: './individual-travel-assistance.component.html',
  styleUrls: [ './individual-travel-assistance.component.scss' ]
} )
export class IndividualTravelAssistanceComponent implements OnInit, OnDestroy {

  /**
   * @description Es el formulario
   */
  @Input() formData: FormGroup;

  /**
   * @description Subject para finalizar suscripciones
   */
  private finish = new Subject();

  /**
   * @description Es un modelo de datos para el componente de botón
   */
  public dataButton = new FormPropModel( { classes: 'green', label: 'Siguiente' } );

  constructor(
  ) {
  }

  ngOnInit(): void {
    this.subs();
  }

  ngOnDestroy() {
    this.finish.next( true );
  }

  /**
   * @description De momento solo se usa para ver como cambia dinamicamente el valor del formulario
   */
  private subs() {
    if ( !this.formData ) return;
    this.formData.valueChanges.pipe(
      takeUntil( this.finish ),
      tap( el => {
        console.log( 'desde individual travel asistance', el );
      } )
    ).subscribe();
  }

  /**
   * @description Consigue el valor de una propiedad del formulario
   */
  public getFormPropVal( nameProp: string | string[] ) {
    if ( !this.formData || nameProp.length <= 0 ) return;
    return this.formData.get( nameProp ).value;
  }

  /**
   * @description Ahora mismo solo alterna entre el numero 1 y 2 para mostrar un formuario u otro
   */
  public next() {
    if ( !this.formData ) return;
    this.formData.get( [ 'individualTravelAsistance', 'currentStep' ] ).value === '1'
      ? this.formData.get( [ 'individualTravelAsistance', 'currentStep' ] ).setValue( '2' )
      : this.formData.get( [ 'individualTravelAsistance', 'currentStep' ] ).setValue( '1' )
  }


}
