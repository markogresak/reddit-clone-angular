import { Pipe, PipeTransform } from '@angular/core';
import formatDistance from 'date-fns/formatDistance';

@Pipe({
  name: 'fromNow',
})
export class FromNowPipe implements PipeTransform {
  transform(date: Date | string): string {
    const now = new Date();
    return formatDistance(new Date(date), now, { addSuffix: true });
  }
}
