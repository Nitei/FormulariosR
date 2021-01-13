import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil, tap } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { NameStepType } from '../../../shared/types/name-step.type';

@Component( {
  selector: 'app-individual-travel-assistance',
  templateUrl: './individual-travel-assistance.component.html',
  styleUrls: [ './individual-travel-assistance.component.scss' ]
} )
export class IndividualTravelAssistanceComponent implements OnInit, OnDestroy {

  public formData: FormGroup;
  private finish = new Subject();
  public dataButton = { text: 'boton', class: 'green' }

  constructor( private fb: FormBuilder ) {
    this.formData = this.fb.group( {
      name: '',
      edad: '',
      currentStep: '1'
    } )
  }

  ngOnInit(): void {
    this.subs();
  }

  ngOnDestroy() {
    this.finish.next( true );
  }

  private subs() {
    this.formData.valueChanges.pipe(
      takeUntil( this.finish ),
      tap( el => {
        console.log( el );
      } )
    ).subscribe();
  }

  public getFormProp( nameProp: string ): NameStepType {
    return this.formData.get( nameProp ).value;
  }

  public log( ev: any ): any {
    console.log( ev );
  }

  public next() {
    this.formData.get( 'currentStep' ).value === '1'
      ? this.formData.patchValue( { currentStep: '2' } )
      : this.formData.patchValue( { currentStep: '1' } )
  }


}
