import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GdsButtonModule } from '../public-api';
import { GdsInputModule } from './gds-input/gds-input.module';
import { GdsComponent } from './gds.component';

@NgModule({
  declarations: [GdsComponent],
  imports: [CommonModule, GdsButtonModule, GdsInputModule],
  exports: [GdsComponent],
})
export class GdsModule {}
