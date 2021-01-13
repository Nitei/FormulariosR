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

  @Input() formData: FormGroup;
  private finish = new Subject();
  public dataButton = new FormPropModel( { classes: 'green', text: 'Botón' } );

  constructor(
  ) {
  }

  ngOnInit(): void {
    this.subs();
  }

  ngOnDestroy() {
    this.finish.next( true );
  }

  private subs() {
    if ( !this.formData ) return;
    this.formData.valueChanges.pipe(
      takeUntil( this.finish ),
      tap( el => {
        console.log( 'desde individual travel asistance', el );
      } )
    ).subscribe();
  }

  public getFormProp( nameProp: string | string[] ) {
    if ( !this.formData || nameProp.length <= 0 ) return;
    return this.formData.get( nameProp ).value;
  }

  public log( ev: any ): any {
    console.log( ev );
  }

  public next() {
    if ( !this.formData ) return;
    this.formData.get( [ 'individualTravelAsistance', 'currentStep' ] ).value === '1'
      ? this.formData.get( [ 'individualTravelAsistance', 'currentStep' ] ).setValue('2')
      : this.formData.get( [ 'individualTravelAsistance', 'currentStep' ] ).setValue( '1' )
  }


}
