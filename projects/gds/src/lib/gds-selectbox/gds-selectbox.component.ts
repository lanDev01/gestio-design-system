import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  HostListener,
  Input,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

export interface GdsSelectOption {
  display: string;
  value: any;
}

@Component({
  selector: 'gds-selectbox',
  templateUrl: './gds-selectbox.component.html',
  styleUrls: ['./gds-selectbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GdsSelectboxComponent),
      multi: true,
    },
  ],
})
export class GdsSelectboxComponent {
  @Input() label: string = '';
  @Input() placeholder: string = 'Selecione...';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() error: boolean = false;
  @Input() errorMessage: string = '';
  @Input() helperText: string = '';
  @Input() id: string =
    `gds-selectbox-${Math.random().toString(36).substr(2, 9)}`;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() options: GdsSelectOption[] = [];

  searchTerm: string = '';
  selectedValue: any = null;
  isOpen: boolean = false;
  isFocused: boolean = false;
  filteredOptions: GdsSelectOption[] = [];

  private onChange = (value: any) => {};
  private onTouched = () => {};

  constructor(
    private elementRef: ElementRef,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.filteredOptions = [...this.options];
  }

  onSearchInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value;
    this.filterOptions();
  }

  filterOptions(): void {
    if (!this.searchTerm) {
      this.filteredOptions = [...this.options];
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredOptions = this.options.filter((option) =>
        option.display.toLowerCase().includes(term),
      );
    }
    this.cdr.markForCheck();
  }

  toggleDropdown(): void {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.filterOptions();
      }
      this.cdr.markForCheck();
    }
  }

  clearSelection(): void {
    this.selectedValue = null;
    this.searchTerm = '';
    this.isOpen = false;
    this.onChange(null);
    this.cdr.markForCheck();
  }

  selectOption(option: GdsSelectOption): void {
    this.selectedValue = option.value;
    this.searchTerm = option.display;
    this.isOpen = false;
    this.onChange(this.selectedValue);
    this.cdr.markForCheck();
  }

  onFocus(): void {
    this.isFocused = true;
    this.isOpen = true;
    this.cdr.markForCheck();
  }

  onBlur(): void {
    setTimeout(() => {
      this.isFocused = false;
      this.isOpen = false;
      this.onTouched();

      // Restaura o display da opção selecionada se o searchTerm não corresponder
      if (this.selectedValue !== null) {
        const selected = this.options.find(
          (opt) => opt.value === this.selectedValue,
        );
        if (selected) {
          this.searchTerm = selected.display;
        }
      } else {
        this.searchTerm = '';
      }
      this.cdr.markForCheck();
    }, 200);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
      this.cdr.markForCheck();
    }
  }

  // ControlValueAccessor implementation
  writeValue(value: any): void {
    this.selectedValue = value;
    if (value !== null && value !== undefined) {
      const selected = this.options.find((opt) => opt.value === value);
      if (selected) {
        this.searchTerm = selected.display;
      }
    } else {
      this.searchTerm = '';
    }
    this.cdr.markForCheck();
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }
}
