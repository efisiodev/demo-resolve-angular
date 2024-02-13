import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { User } from '@modules/user/domain/user.interface';

@Component({
  selector: 'app-user-grid-page',
  standalone: true,
  imports: [RouterLink, MatCardModule],
  templateUrl: './user-grid-page.component.html',
  styleUrl: './user-grid-page.component.scss'
})
export class UserGridPageComponent implements OnInit {

  private readonly activatedRoute = inject(ActivatedRoute)

  public user!: User

  ngOnInit(): void {
    this.user = (<{user: User}>this.activatedRoute.snapshot.data).user
  }
}
