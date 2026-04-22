import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: true
})
export class StatusPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'completed':
        return '✅ Completed';
      case 'active':
        return '🚧 Active';
      default:
        return value;
    }
  }

}