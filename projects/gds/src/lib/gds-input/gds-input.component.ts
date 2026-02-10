import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'gds-input',
  templateUrl: './gds-input.component.html',
  styleUrls: ['./gds-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GdsInputComponent {
  @Input() id = '';
  @Input() placeholder = '';
  @Input() type: 'text' | 'email' | 'password' | 'number' = 'text';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled = false;
  @Input() invalid = false;
  @Input() value: string = '';

  @Output() input = new EventEmitter<Event>();
  @Output() focus = new EventEmitter<void>();
  @Output() blur = new EventEmitter<void>();

  isFocused: boolean = false;

  onInput(event: Event): void {
    this.input.emit(event);
  }

  onFocus(): void {
    this.isFocused = true;
    this.focus.emit();
  }

  onBlur(): void {
    this.isFocused = false;
    this.blur.emit();
  }
}
