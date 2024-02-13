import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@modules/user/domain/user.interface';

@Component({
  selector: 'app-user-addresses-page',
  standalone: true,
  imports: [],
  templateUrl: './user-addresses-page.component.html',
  styleUrl: './user-addresses-page.component.scss'
})
export class UserAddressesPageComponent implements OnInit {

  private readonly activatedRoute = inject(ActivatedRoute)

  public user!: User

  ngOnInit(): void {
    this.user = (<{user: User}>this.activatedRoute.snapshot.data).user
  }
}
