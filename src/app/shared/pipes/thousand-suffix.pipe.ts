import { Pipe, PipeTransform } from '@angular/core';

/**
 * This pipe transforms large numbers (e.g. 2000000) into a shorter form (e.g. 2M)
 * @param input the number to trasnform
 * @param args you can add the number of decimals wanted (e.g. 2 decimals = 2.22M)
 * @returns returns the same input if is not a number or if the input is less than 1000
 * or return the shorter version of the input
 */
@Pipe({
  name: 'thousandSuffix',
})
export class ThousandSuffixPipe implements PipeTransform {
  transform(input: number, args?: number): number | string {
    const suffixes: string[] = ['K', 'M', 'G', 'T', 'P', 'E'];

    if (Number.isNaN(input)) {
      return input;
    }

    if (input < 1000) {
      return input;
    }

    const exp = Math.floor(Math.log(input) / Math.log(1000));

    return (input / Math.pow(1000, exp)).toFixed(args) + suffixes[exp - 1];
  }
}
