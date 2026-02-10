import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GdsButtonModule } from '../public-api';
import { GdsInputModule } from './gds-input/gds-input.module';
import { GdsLabelModule } from './gds-label/gds-label.module';
import { GdsSelectboxModule } from './gds-selectbox/gds-selectbox.module';
import { GdsTextboxModule } from './gds-textbox/gds-textbox.module';
import { GdsComponent } from './gds.component';

@NgModule({
  declarations: [GdsComponent],
  imports: [
    CommonModule,
    GdsButtonModule,
    GdsInputModule,
    GdsLabelModule,
    GdsTextboxModule,
    GdsSelectboxModule,
  ],
  exports: [GdsComponent],
})
export class GdsModule {}
