import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@modules/user/domain/user.interface';
import { UserFindService } from '@modules/user/infrastructure/user-find.service';

@Component({
  selector: 'app-user-vehicles-page',
  standalone: true,
  imports: [],
  templateUrl: './user-vehicles-page.component.html',
  styleUrl: './user-vehicles-page.component.scss'
})
export class UserVehiclesPageComponent  implements OnInit {

  private readonly activatedRoute = inject(ActivatedRoute)

  private readonly userFindService = inject(UserFindService)

  public user!: User

  ngOnInit(): void {
    const id = (<{id: string}>this.activatedRoute.parent?.snapshot.params).id
    this.userFindService.find(id).subscribe(resp => {
      this.user = resp
    })
  }
}
