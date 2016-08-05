import { RouterConfig } from '@angular/router';
import { Home } from './components/home/home';
import { GridTestComponent } from './components/grid-test/grid-test';

export const routes: RouterConfig = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'grid-test', component: GridTestComponent },
    { path: '**', redirectTo: 'home' }
];
