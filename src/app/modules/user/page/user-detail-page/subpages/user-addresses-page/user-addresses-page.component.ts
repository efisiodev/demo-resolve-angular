import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@modules/user/domain/user.interface';
import { userRouteSnapshot } from '@modules/user/infrastructure/user-find.route-snapshot';

@Component({
  selector: 'app-user-addresses-page',
  standalone: true,
  imports: [],
  templateUrl: './user-addresses-page.component.html',
  styleUrl: './user-addresses-page.component.scss'
})
export class UserAddressesPageComponent {

  public user: User = userRouteSnapshot()
}
