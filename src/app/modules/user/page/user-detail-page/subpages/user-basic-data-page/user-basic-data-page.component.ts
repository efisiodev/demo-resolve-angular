import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@modules/user/domain/user.interface';

@Component({
  selector: 'app-user-basic-data-page',
  standalone: true,
  imports: [],
  templateUrl: './user-basic-data-page.component.html',
  styleUrl: './user-basic-data-page.component.scss'
})
export class UserBasicDataPageComponent implements OnInit {

  private readonly activatedRoute = inject(ActivatedRoute)

  public user!: User

  ngOnInit(): void {
    this.user = (<{user: User}>this.activatedRoute.snapshot.data).user
  }

}
