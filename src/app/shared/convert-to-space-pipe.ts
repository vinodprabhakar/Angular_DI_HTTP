import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertToSpace'
})
export class convertToSpacePipe implements PipeTransform {

    transform(value: string, char: string): string {
        return value.replace(char, " ");
    }

}