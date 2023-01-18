import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validator } from "@angular/forms";


//PENDIENTE DE TERMINAR
@Directive({
    selector:'[customMin][ngModel]',
    providers:[{
        provide: NG_VALIDATORS,
        useExisting:CustomMinDirective
    }]
})
export class CustomMinDirective implements Validator{

    @Input() minimo!: number;


    constructor(){
        
    }


    validate( control:FormControl ){
        const inputValue = control.value

        console.log(inputValue);

        return null;
    }
}