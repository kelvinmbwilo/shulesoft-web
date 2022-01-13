import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appFieldTakenValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: FieldTakenValidatorDirective,
      multi: true,
    },
  ],
})
export class FieldTakenValidatorDirective implements Validator {
  @Input('appFieldTakenValidator')
  params!: {
    items: any[];
    item: any;
    field: string;
  };

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    const listToUse =
      this.params.item && this.params.items
        ? this.params.items
            .map((i) => i[this.params.field])
            .filter((i) => i !== this.params.item[this.params.field])
        : this.params.items.map((i) => i[this.params.field]);
    const forbidden =
      listToUse
        .filter((i) => !!i)
        .map((i) => i.toLowerCase().trim())
        .indexOf(control.value.toLowerCase().trim()) !== -1;
    return forbidden ? { fieldTaken: true } : null;
  }
}
