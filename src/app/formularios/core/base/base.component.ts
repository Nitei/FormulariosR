import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { SecureNameType } from '../../shared/types/secure-name.type';
import { FormGroup, FormBuilder } from '@angular/forms';
import { takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FormPropModel } from '../../shared/classes/form-prop.model';
import { labels } from './individual-travel-assistance/labels';

@Component( {
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: [ './base.component.scss' ]
} )
export class BaseComponent implements OnInit, OnDestroy {

  formData: FormGroup;

  private finishSubscriptions = new Subject();

  @Input() secureType: SecureNameType;

  @Output() formValue: EventEmitter<any> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    this.emitFormChanges();
  }

  ngOnDestroy() {
    this.finishSubscriptions.next( true );
  }

  private initForm(): void {

    this.formData = this.fb.group( {

      individualTravelAsistance: this.fb.group( {
        title: labels.individualTravelAsistance.title,
        subTitle: labels.individualTravelAsistance.subTitle,
        name: this.fb.group( new FormPropModel( labels.individualTravelAsistance.name ) ),
        edad: this.fb.group( new FormPropModel( labels.individualTravelAsistance.edad )),
        apellidos: this.fb.group( {
          primero: this.fb.group( new FormPropModel( labels.individualTravelAsistance.apellidos.primero ) ),
          segundo: this.fb.group( new FormPropModel( labels.individualTravelAsistance.apellidos.segundo ) )
        } ),
        numberOfSteps: labels.individualTravelAsistance.numberOfSteps,
        currentStep: labels.individualTravelAsistance.currentStep
      } )
    } );
  };

  private emitFormChanges(): void {
    if ( this.formData ) {
      this.formData.valueChanges
        .pipe(
          takeUntil( this.finishSubscriptions ),
          tap( changedData => {
            console.log( this.formData.value );
            this.formValue.emit( this.formData.value );
          } )
        ).subscribe();
    }
  }

}
