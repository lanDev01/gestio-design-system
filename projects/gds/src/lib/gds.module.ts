import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GdsButtonModule } from '../public-api';
import { GdsComponent } from './gds.component';

@NgModule({
  declarations: [GdsComponent],
  imports: [CommonModule,GdsButtonModule],
  exports: [GdsComponent],
})
export class GdsModule {}
