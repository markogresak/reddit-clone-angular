import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'domainOnly',
})
export class DomainOnlyPipe implements PipeTransform {
  transform(url: string): string {
    try {
      return new URL(url).host;
    } catch {
      return '';
    }
  }
}
