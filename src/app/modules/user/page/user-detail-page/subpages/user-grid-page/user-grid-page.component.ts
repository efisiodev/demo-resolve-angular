import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-user-grid-page',
  standalone: true,
  imports: [RouterLink, MatCardModule],
  templateUrl: './user-grid-page.component.html',
  styleUrl: './user-grid-page.component.scss'
})
export class UserGridPageComponent {
  public id = 'a4c19ac2-9a4b-4f90-b7a3-36127b6b12d9'
}
