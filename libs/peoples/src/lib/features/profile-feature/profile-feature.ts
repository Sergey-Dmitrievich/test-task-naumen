import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { PeoplesService } from '../../data/services/peoples-service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { IUser } from '../../data/interfaces/people.interface';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'lib-profile-feature',
  imports: [CommonModule, AsyncPipe],
  templateUrl: './profile-feature.html',
  styleUrl: './profile-feature.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileFeature {
  peoplesService = inject(PeoplesService)
  route = inject(ActivatedRoute);
  router = inject(Router);
  location = inject(Location);

  user$: Observable<IUser | undefined> = this.route.paramMap
  .pipe(
    map(params => Number(params.get('id'))),
    switchMap(id => this.peoplesService.getUserInfo(id))
  );

  goBack(): void {
    this.router.navigate(['/clients']);
  }
}
