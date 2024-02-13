import { Component } from '@angular/core';
import { User } from '@modules/user/domain/user.interface';
import { userRouteSnapshot } from '@modules/user/infrastructure/user-find.route-snapshot';

@Component({
  selector: 'app-user-studies-page',
  standalone: true,
  imports: [],
  templateUrl: './user-studies-page.component.html',
  styleUrl: './user-studies-page.component.scss'
})
export class UserStudiesPageComponent {

  public user: User = userRouteSnapshot()

}
