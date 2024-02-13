import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@modules/user/domain/user.interface';

@Component({
  selector: 'app-user-studies-page',
  standalone: true,
  imports: [],
  templateUrl: './user-studies-page.component.html',
  styleUrl: './user-studies-page.component.scss'
})
export class UserStudiesPageComponent implements OnInit {

  private readonly activatedRoute = inject(ActivatedRoute)

  public user!: User

  ngOnInit(): void {
    this.user = (<{user: User}>this.activatedRoute.snapshot.data).user
  }
}
