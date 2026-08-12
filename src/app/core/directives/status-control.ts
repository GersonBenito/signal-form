import { computed, Directive, effect, ElementRef, HostListener, inject, input, Renderer2, Signal, signal } from '@angular/core';

@Directive({
  selector: '[statusControl]',
  host: {
    '[attr.aria-invalid]': 'ariaInvalid()'
  }
})
export class StatusControl {
  public hasError = input<boolean>(false);
  public hasTouched = input<boolean>(false);
  private readonly elementRef: ElementRef<HTMLInputElement> = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  private readonly inputElement: Signal<HTMLInputElement> = computed(() => this.elementRef.nativeElement);
  protected readonly ariaInvalid: Signal<string | null> = computed(() => this.hasError() ? 'true' : null);

  private readonly isFocus = signal<boolean>(false);

  constructor(){
    effect(() => {
      this.applyOutline(this.inputElement());
    });
  }

  @HostListener('focus')
  onFocus(): void {
    this.isFocus.set(true);
    this.toggleErrorVisibility(this.inputElement(), 'none');
    this.removeOutlineStyle(this.inputElement());
    this.renderer.setStyle(this.inputElement(), 'outline', '1px solid var(--primary)');
  }

  @HostListener('blur')
  onBlur(): void {
    this.isFocus.set(false);
    this.toggleErrorVisibility(this.inputElement(), 'block');
    this.applyOutline(this.inputElement());
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void{
    if(event.key.toUpperCase() === 'TAB'){
      this.removeOutlineStyle(this.inputElement());
      this.renderer.setStyle(this.inputElement(), 'outline', '4px solid var(--secondary)');
    }
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    if(!this.isFocus()){
      this.applyOutline(this.inputElement(), 'var(--gray-primary)');
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    if(!this.isFocus()){
      this.applyOutline(this.inputElement());
    }
  }

  removeOutlineStyle(input: HTMLInputElement){
    this.renderer.removeStyle(input, 'outline');
  }

  applyOutline(input: HTMLInputElement, color = 'var(--gray-secondary)'){
    this.removeOutlineStyle(input);
    this.isFocus.set(false);
    if(this.hasError()){
      this.renderer.setStyle(input, 'outline', '2px solid var(--error)');
    }else {
      this.renderer.setStyle(input, 'outline', `1px solid ${color}`);
    }
  }

  toggleErrorVisibility(input: HTMLInputElement, property: 'block' | 'none'){
    const errorMessage = input.parentElement?.querySelector<HTMLDivElement>('[error-message]');
    if(errorMessage){
      this.renderer.removeStyle(errorMessage, 'display');
      this.renderer.setStyle(errorMessage, 'display', property);
    }
  }
}
