import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { User } from '@modules/user/domain/user.interface';
import { userRouteSnapshot } from '@modules/user/infrastructure/user-find.route-snapshot';

@Component({
  selector: 'app-user-grid-page',
  standalone: true,
  imports: [RouterLink, MatCardModule],
  templateUrl: './user-grid-page.component.html',
  styleUrl: './user-grid-page.component.scss'
})
export class UserGridPageComponent {

  public user: User = userRouteSnapshot()

}
