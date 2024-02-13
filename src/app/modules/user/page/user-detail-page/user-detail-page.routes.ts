import { ResolveData, Routes } from "@angular/router";
import { UserDetailPageComponent } from "./user-detail-page.component";
import { userResolver } from '../../infrastructure/user-find.resolver';

const RESOLVE_DATA: ResolveData = {
  user: userResolver
}

export const routes: Routes = [
  {
    path: '',
    component: UserDetailPageComponent,
    children: [
      {
        path: '',
        loadComponent: () => 
          import('./subpages/user-grid-page/user-grid-page.component')
          .then(c => c.UserGridPageComponent),
        resolve: RESOLVE_DATA,
      },
      {
        path: 'basic-data',
        loadComponent: () => 
          import('./subpages/user-basic-data-page/user-basic-data-page.component')
          .then(c => c.UserBasicDataPageComponent),
        resolve: RESOLVE_DATA,
      },
      {
        path: 'addresses',
        loadComponent: () => 
          import('./subpages/user-addresses-page/user-addresses-page.component')
          .then(c => c.UserAddressesPageComponent),
        resolve: RESOLVE_DATA,
      },
      {
        path: 'documents',
        loadComponent: () => 
          import('./subpages/user-documents-page/user-documents-page.component')
          .then(c => c.UserDocumentsPageComponent),
        resolve: RESOLVE_DATA,
      },
      {
        path: 'permissions',
        loadComponent: () => 
          import('./subpages/user-permissions-page/user-permissions-page.component')
          .then(c => c.UserPermissionsPageComponent),
        resolve: RESOLVE_DATA,
      },
      {
        path: 'studies',
        loadComponent: () => 
          import('./subpages/user-studies-page/user-studies-page.component')
          .then(c => c.UserStudiesPageComponent),
        resolve: RESOLVE_DATA,
      },
      {
        path: 'vehicles',
        loadComponent: () => 
          import('./subpages/user-vehicles-page/user-vehicles-page.component')
          .then(c => c.UserVehiclesPageComponent),
        resolve: RESOLVE_DATA,
      }
    ]
  }
]