import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@modules/user/domain/user.interface';
import { userRouteSnapshot } from '@modules/user/infrastructure/user-find.route-snapshot';

@Component({
  selector: 'app-user-permissions-page',
  standalone: true,
  imports: [],
  templateUrl: './user-permissions-page.component.html',
  styleUrl: './user-permissions-page.component.scss'
})
export class UserPermissionsPageComponent {

  public user: User = userRouteSnapshot()

}
