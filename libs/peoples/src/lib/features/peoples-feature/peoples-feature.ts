import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeoplesService } from '../../data/services/peoples-service';
import { FilterStatus, IUser } from '../../data/interfaces/people.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, combineLatest, debounceTime, distinctUntilChanged, of, startWith } from 'rxjs';



@Component({
  selector: 'lib-peoples-feature',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './peoples-feature.html',
  styleUrl: './peoples-feature.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeoplesFeature implements OnInit {

  searchData: string | null = ''
  peoplesService = inject(PeoplesService)
  ref = inject(DestroyRef);
  allUsers: IUser[] = []
  filteredUsers: IUser[] = []
  router = inject(Router)
  currentFilter: FilterStatus = 'all'

  searchForm = new FormGroup({
    name: new FormControl<string>('', Validators.required)
  })

  ngOnInit(){
    this.peoplesService.getUsersInfo()
    .pipe(
      catchError(error => {
        alert('Ошибка ' + error)
        return of([])
      }),
      takeUntilDestroyed(this.ref)
    )
    .subscribe(val => {
      this.allUsers = val
      this.applyFilters()
    })

    this.searchForm.controls.name.valueChanges
    .pipe(
      startWith(''),
      // debounceTime(100),
      // distinctUntilChanged(),
      catchError(error => {
        alert('Ошибка ' + error)
        return of('')
      }),
      takeUntilDestroyed(this.ref)
    )
    .subscribe(val => {
      this.searchData = val
      this.applyFilters()
    })
  }

  updateNowClient(id: number){
    this.router.navigate(['/profile', id]);
  }

  filter(){
    if (this.currentFilter === 'all') {
      this.currentFilter = 'active'
    } else if (this.currentFilter === 'active') {
      this.currentFilter = 'inactive'
    } else {
      this.currentFilter = 'all'
    }
    this.applyFilters()
  }

  applyFilters(): void {
    let filtered = [...this.allUsers];

    if (this.searchData) {
      filtered = filtered.filter(user =>
        user.name.toLowerCase().includes(this.searchData!.toLowerCase())
      );
    }

    if (this.currentFilter === 'active') {
      filtered = filtered.filter(user => user.active);
    } else if (this.currentFilter === 'inactive') {
      filtered = filtered.filter(user => !user.active);
    }

    this.filteredUsers = filtered;
  }

}
