import { Component } from '@angular/core';
import { User } from '@modules/user/domain/user.interface';
import { userRouteSnapshot } from '@modules/user/infrastructure/user-find.route-snapshot';

@Component({
  selector: 'app-user-basic-data-page',
  standalone: true,
  imports: [],
  templateUrl: './user-basic-data-page.component.html',
  styleUrl: './user-basic-data-page.component.scss'
})
export class UserBasicDataPageComponent {

  public user: User = userRouteSnapshot()

}
