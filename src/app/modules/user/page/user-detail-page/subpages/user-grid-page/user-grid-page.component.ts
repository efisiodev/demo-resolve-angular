import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { User } from '@modules/user/domain/user.interface';
import { UserFindService } from '@modules/user/infrastructure/user-find.service';

@Component({
  selector: 'app-user-grid-page',
  standalone: true,
  imports: [RouterLink, MatCardModule],
  templateUrl: './user-grid-page.component.html',
  styleUrl: './user-grid-page.component.scss'
})
export class UserGridPageComponent implements OnInit {

  private readonly activatedRoute = inject(ActivatedRoute)

  private readonly userFindService = inject(UserFindService)

  public user!: User

  ngOnInit(): void {
    const id = (<{id: string}>this.activatedRoute.parent?.snapshot.params).id
    this.userFindService.find(id).subscribe(resp => {
      this.user = resp
    })
  }
}
