import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GdsInputModule, GdsLabelModule } from '../../public-api';
import { GdsTextboxComponent } from './gds-textbox.component';

@NgModule({
  declarations: [GdsTextboxComponent],
  imports: [CommonModule, GdsLabelModule, GdsInputModule],
  exports: [GdsTextboxComponent],
})
export class GdsTextboxModule {}
