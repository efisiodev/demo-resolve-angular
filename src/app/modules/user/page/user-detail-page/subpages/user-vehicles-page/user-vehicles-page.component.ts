import { Component } from '@angular/core';
import { User } from '@modules/user/domain/user.interface';
import { userRouteSnapshot } from '@modules/user/infrastructure/user-find.route-snapshot';

@Component({
  selector: 'app-user-vehicles-page',
  standalone: true,
  imports: [],
  templateUrl: './user-vehicles-page.component.html',
  styleUrl: './user-vehicles-page.component.scss'
})
export class UserVehiclesPageComponent {

  public user: User = userRouteSnapshot()

}
