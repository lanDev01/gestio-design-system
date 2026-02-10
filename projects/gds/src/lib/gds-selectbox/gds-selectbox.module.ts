import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GdsLabelModule } from '../gds-label/gds-label.module';
import { GdsSelectboxComponent } from './gds-selectbox.component';

@NgModule({
  declarations: [GdsSelectboxComponent],
  imports: [CommonModule, GdsLabelModule],
  exports: [GdsSelectboxComponent],
})
export class GdsSelectboxModule {}
