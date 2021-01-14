import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSimpleComponent } from './shared/components/forms/form-simple/form-simple.component';
import { IndividualTravelAssistanceComponent } from './core/base/individual-travel-assistance/individual-travel-assistance.component';
import { BaseComponent } from './core/base/base.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './shared/components/presenters/button/button.component';
import { InputComponent } from './shared/components/presenters/input/input.component';
import { UtilsService } from './shared/services/utils/utils.service';
import { FormComplexComponent } from './shared/components/forms/form-complex/form-complex.component';


@NgModule( {
  declarations: [
    BaseComponent,

    // Flujos
    IndividualTravelAssistanceComponent,

    // Componentes comunes
    ButtonComponent,
    InputComponent,

    // Formularios
    FormSimpleComponent,
    FormComplexComponent

  ],
  exports: [
    BaseComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    UtilsService
  ]
} )
export class FormulariosModule { }
