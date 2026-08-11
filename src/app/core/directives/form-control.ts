import { Directive, effect, ElementRef, HostListener, inject, input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFormControl]',
})
export class FormControl {
  public hasError = input<boolean>(false);
  private readonly elementRef = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  constructor(){
    effect(() => {
      this.validate();
    });
  }

  validate(){
    const input = this.elementRef.nativeElement;
    this.removeOutlineStyle(input);
    this.validateHasError(input);
  }

  @HostListener('focus')
  onFocus(): void {
    const input = this.elementRef.nativeElement;
    this.removeOutlineStyle(input);
    this.renderer.setStyle(input, 'outline', '1px solid #c48628');
  }

  @HostListener('blur')
  onBlur(): void {
    const input = this.elementRef.nativeElement;
    this.removeOutlineStyle(input);
    this.validateHasError(input);
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void{
    if(event.key.toUpperCase() === 'TAB'){
      const input = event.target as HTMLInputElement;
      this.removeOutlineStyle(input);
      this.renderer.setStyle(input, 'outline', '4px solid #f4ceae');
    }
  }

  removeOutlineStyle(input: ElementRef | HTMLInputElement){
    this.renderer.removeStyle(input, 'outline');
  }

  validateHasError(input: ElementRef){
    if(this.hasError()){
      this.renderer.setStyle(input, 'outline', '2px solid #C30000');
    }else {
      this.renderer.setStyle(input, 'outline', '1px solid #C4C4C4');
    }
  }
}
