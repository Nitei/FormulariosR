import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSimpleComponent } from './shared/components/forms/form-simple/form-simple.component';
import { IndividualTravelAssistanceComponent } from './core/base/individual-travel-assistance/individual-travel-assistance.component';
import { BaseComponent } from './core/base/base.component';
import { DecesosComponent } from './core/base/decesos/decesos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FakeStoreService } from './shared/services/fake-store.service';
import { ButtonComponent } from './shared/components/presenters/button/button.component';


@NgModule({
  declarations: [
    BaseComponent,

    // Flujos
    IndividualTravelAssistanceComponent,
    DecesosComponent,

    // Componentes comunes

    // Formularios
    FormSimpleComponent,

    ButtonComponent
  ],
  exports: [
    BaseComponent,

    // Flujos
    IndividualTravelAssistanceComponent,
    DecesosComponent,

    // Componentes comunes

    // Formularios
    FormSimpleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    FakeStoreService
  ]
})
export class FormulariosModule { }
