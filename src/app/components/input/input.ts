import { Component, input, model, output } from '@angular/core';
import { FormValueControl, ValidationError, WithOptionalFieldTree } from '@angular/forms/signals';
import { StatusControl } from '@core/directives/status-control';

@Component({
  selector: 'app-input',
  imports: [StatusControl],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input implements FormValueControl<string>{
  public value = model<string>('');
  public touch = output<void>();
  public label = input<string>('');
  public placeholder = input<string>('');
  public type = input<'text' | 'email' | 'password'>('text');

  public invalid = input<boolean>(false);
  public touched = input<boolean>(false);
  public disabled = input<boolean>(false);
  public errors = input<readonly WithOptionalFieldTree<ValidationError>[]>([]);
}
