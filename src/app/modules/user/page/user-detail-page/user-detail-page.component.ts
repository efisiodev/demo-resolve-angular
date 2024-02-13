import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { UserFindService } from '../../infrastructure/user-find.service';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { User } from '../../domain/user.interface';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user-detail-page',
  standalone: true,
  imports: [MatCardModule, AsyncPipe, RouterOutlet],
  templateUrl: './user-detail-page.component.html',
  styleUrl: './user-detail-page.component.scss'
})
export class UserDetailPageComponent {
  private readonly activatedRoute = inject(ActivatedRoute)

  private readonly userFindService = inject(UserFindService)

  public user$: Observable<User> = this.userFindService
    .find((<{id: string}>this.activatedRoute.snapshot.params).id)
}
