import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => 
        import('./modules/home/page/home-page/home-page.routes')
            .then(m => m.routes)
    },
    {
        path: 'user',
        loadChildren: () => 
        import('./modules/user/page/user-list-page/user-list-page.routes')
            .then(m => m.routes)
    },
    {
        path: 'user/:id',
        loadChildren: () => 
        import('./modules/user/page/user-detail-page/user-detail-page.routes')
            .then(m => m.routes)
    },
    { 
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    },
];
