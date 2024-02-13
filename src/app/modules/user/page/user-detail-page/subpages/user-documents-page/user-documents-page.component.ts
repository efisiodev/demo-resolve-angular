import { Component } from '@angular/core';
import { User } from '@modules/user/domain/user.interface';
import { userRouteSnapshot } from '@modules/user/infrastructure/user-find.route-snapshot';

@Component({
  selector: 'app-user-documents-page',
  standalone: true,
  imports: [],
  templateUrl: './user-documents-page.component.html',
  styleUrl: './user-documents-page.component.scss'
})
export class UserDocumentsPageComponent {

  public user: User = userRouteSnapshot()

}
