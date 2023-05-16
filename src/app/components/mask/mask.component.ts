import { Directive, HostListener, ElementRef } from "@angular/core";

@Directive({
  selector: "[mask]",
})
export class MaskComponent {
  constructor(private el: ElementRef) {}

  @HostListener("input", ["$event.target.value"])
  onInput(value: string) {
    const trimmed = value.replace(/\D/g, "");

    const input = this.el.nativeElement;
    switch (input.getAttribute("mask")) {
      case "phone":
        const numbers = trimmed.slice(0, 10);
        const phoneNumber = numbers.replace(
          /(\d{2})(\d{4})(\d{4})/,
          "($1) $2-$3"
        );
        input.value = phoneNumber;
        break;

      case "cpf":
        const cpf = trimmed.slice(0, 11);
        const cpfMask = cpf.replace(
          /(\d{3})(\d{3})(\d{3})(\d{2})/,
          "$1.$2.$3-$4"
        );
        input.value = cpfMask;
        break;

      case "cellphone":
        const cellphone = trimmed.slice(0, 11);
        const phone = cellphone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
        input.value = phone;
        break;

      case "capitalize":
        input.value = this.capitalize(value);
        break;

      default:
        input.value = trimmed;
        break;
    }
  }

  private capitalize(value: string): string {
    if (!value) {
      return value; // Retorna a string original se for nula ou vazia
    }

    const words = value.split(" ");
    const capitalizedWords = words.map((word) => {
      const firstLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1).toLowerCase();
      return firstLetter + restOfWord;
    });

    return capitalizedWords.join(" ");
  }
}
