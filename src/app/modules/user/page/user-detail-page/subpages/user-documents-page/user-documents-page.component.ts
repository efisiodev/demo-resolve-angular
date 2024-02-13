import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@modules/user/domain/user.interface';

@Component({
  selector: 'app-user-documents-page',
  standalone: true,
  imports: [],
  templateUrl: './user-documents-page.component.html',
  styleUrl: './user-documents-page.component.scss'
})
export class UserDocumentsPageComponent implements OnInit {

  private readonly activatedRoute = inject(ActivatedRoute)

  public user!: User

  ngOnInit(): void {
    this.user = (<{user: User}>this.activatedRoute.snapshot.data).user
  }
}
