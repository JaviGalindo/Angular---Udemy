import { Routes } from '@angular/router';

import { UsuarioEditarComponent } from './/usuario-editar.component';
import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { UsuarioDetalleComponent } from './usuario-detalle.component';

export const USUARIO_ROUTES: Routes = [
    { path: 'new', component: UsuarioNuevoComponent },
    { path: 'edit', component: UsuarioEditarComponent },
    { path: 'detail', component: UsuarioDetalleComponent },
    { path: '**', pathMatch:'full', redirectTo: 'new' }
];
