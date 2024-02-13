import { inject } from '@angular/core'
import {
  ActivatedRouteSnapshot, ResolveFn,
} from '@angular/router'
import { User } from '../domain/user.interface'
import { UserFindService } from './user-find.service'

export const userResolver: ResolveFn<User> = (
  route: ActivatedRouteSnapshot,
) => {
  const userFindService = inject(UserFindService)
  const id = (<{id: string}>route.parent?.params).id
  return userFindService.find(id)
}