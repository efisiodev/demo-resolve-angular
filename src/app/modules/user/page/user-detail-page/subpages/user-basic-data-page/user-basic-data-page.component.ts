import { AsyncPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@modules/user/domain/user.interface';
import { UserFindService } from '@modules/user/infrastructure/user-find.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-basic-data-page',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './user-basic-data-page.component.html',
  styleUrl: './user-basic-data-page.component.scss'
})
export class UserBasicDataPageComponent implements OnInit {

  private readonly activatedRoute = inject(ActivatedRoute)

  private readonly userFindService = inject(UserFindService)

  public user$!: Observable<User>

  ngOnInit(): void {
    const id = (<{id: string}>this.activatedRoute.parent?.snapshot.params).id
    this.user$ = this.userFindService.find(id)
  }

}
