import { inject } from '@angular/core'
import {
  ActivatedRoute,
} from '@angular/router'
import { User } from '../domain/user.interface'

export const userRouteSnapshot = (): User => {
  const activatedRoute = inject(ActivatedRoute)
  return (<{user: User}>activatedRoute.snapshot.data).user
}