import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { User } from '../../domain/user.interface';
import { UserSearchService } from '@modules/user/infrastructure/user-search.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list-page',
  standalone: true,
  imports: [MatTableModule, AsyncPipe, RouterLink],
  templateUrl: './user-list-page.component.html',
  styleUrl: './user-list-page.component.scss'
})
export class UserListPageComponent {

  private readonly userSearchService = inject(UserSearchService)

  public readonly displayedColumns: string[] = 
            ['id', 'name', 'surname', 'address', 'phone', 'studies'];
  
  public users$: Observable<User[]> = this.userSearchService.search()
}
