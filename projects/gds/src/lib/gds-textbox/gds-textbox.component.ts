import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'gds-textbox',
  templateUrl: './gds-textbox.component.html',
  styleUrls: ['./gds-textbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GdsTextboxComponent),
      multi: true,
    },
  ],
})
export class GdsTextboxComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() error: boolean = false;
  @Input() errorMessage: string = '';
  @Input() helperText: string = '';
  @Input() type: 'text' | 'email' | 'password' | 'number' = 'text';
  @Input() id: string =
    `gds-textbox-${Math.random().toString(36).substr(2, 9)}`;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  @Input() control: FormControl | null = null;

  value: string = '';
  isFocused: boolean = false;

  private onChange = (value: string) => {};
  private onTouched = () => {};

  get hasError(): boolean {
    if (this.control) {
      return (
        this.control.invalid && (this.control.dirty || this.control.touched)
      );
    }
    return this.error;
  }

  get validationMessage(): string {
    if (this.control && this.control.errors) {
      if (this.control.errors['required']) {
        return 'Campo obrigatório';
      }
      if (this.control.errors['minlength']) {
        return `Mínimo de ${this.control.errors['minlength'].requiredLength} caracteres`;
      }
      if (this.control.errors['maxlength']) {
        return `Máximo de ${this.control.errors['maxlength'].requiredLength} caracteres`;
      }
      if (this.control.errors['email']) {
        return 'Email inválido';
      }
      return 'Valor inválido';
    }
    return this.errorMessage;
  }

  get isRequired(): boolean {
    if (this.control) {
      return this.control.hasError('required');
    }
    return this.required;
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;

    if (this.control) {
      this.control.setValue(this.value);
      this.control.markAsDirty();
    }

    this.onChange(this.value);
  }

  onFocus(): void {
    this.isFocused = true;
  }

  onBlur(): void {
    this.isFocused = false;

    if (this.control) {
      this.control.markAsTouched();
    }

    this.onTouched();
  }

  // ControlValueAccessor implementation
  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
