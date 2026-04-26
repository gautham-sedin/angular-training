import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { queryObjects } from 'v8';

@Component({
  selector: 'app-live-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './live-search.html',
  styleUrls: ['./live-search.css']
})

export class LiveSearch {

  searchControl = new FormControl('');

  // Simulate API call
  private searchApi(query: string) {
    const data = [
      'Angular',
      'React',
      'Vue',
      'Svelte',
      'Next.js',
      'Node.js'
    ];

    const filtered = data.filter(item => 
      item.toLowerCase().includes(query.toLowerCase())
    );

    return of(filtered);
  }

  // Observable stream
  results$ = this.searchControl.valueChanges.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    switchMap(query => this.searchApi(query || ''))
  );

  // Convert it into Signal
  results = toSignal(this.results$, { initialValue: [] });

}