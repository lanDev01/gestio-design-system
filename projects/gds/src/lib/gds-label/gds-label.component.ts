import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'gds-label',
  templateUrl: './gds-label.component.html',
  styleUrls: ['./gds-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GdsLabelComponent {
  @Input() for?: string;
  @Input() required = false;
  @Input() error = false;
  @Input() disabled = false;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  ngOnInit(): void {}
}
