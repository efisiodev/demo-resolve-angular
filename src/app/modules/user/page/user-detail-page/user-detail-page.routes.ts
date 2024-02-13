import { Routes } from "@angular/router";
import { UserDetailPageComponent } from "./user-detail-page.component";

export const routes: Routes = [
  {
    path: '',
    component: UserDetailPageComponent,
    children: [
      {
        path: '',
        loadComponent: () => 
          import('./subpages/user-grid-page/user-grid-page.component')
          .then(c => c.UserGridPageComponent)
      },
      {
        path: 'basic-data',
        loadComponent: () => 
          import('./subpages/user-basic-data-page/user-basic-data-page.component')
          .then(c => c.UserBasicDataPageComponent)
      },
      {
        path: 'addresses',
        loadComponent: () => 
          import('./subpages/user-addresses-page/user-addresses-page.component')
          .then(c => c.UserAddressesPageComponent)
      },
      {
        path: 'documents',
        loadComponent: () => 
          import('./subpages/user-documents-page/user-documents-page.component')
          .then(c => c.UserDocumentsPageComponent)
      },
      {
        path: 'permissions',
        loadComponent: () => 
          import('./subpages/user-permissions-page/user-permissions-page.component')
          .then(c => c.UserPermissionsPageComponent)
      },
      {
        path: 'studies',
        loadComponent: () => 
          import('./subpages/user-studies-page/user-studies-page.component')
          .then(c => c.UserStudiesPageComponent)
      },
      {
        path: 'vehicles',
        loadComponent: () => 
          import('./subpages/user-vehicles-page/user-vehicles-page.component')
          .then(c => c.UserVehiclesPageComponent)
      }
    ]
  }
]