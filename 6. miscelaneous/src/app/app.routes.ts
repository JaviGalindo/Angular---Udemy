import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const app_routing = RouterModule.forRoot(routes)
