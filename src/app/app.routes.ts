import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Officers } from './officers/officers';
import { About } from './about/about';
import { Programs } from './programs/programs';
import { Join } from './join/join';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'officers', component: Officers },
    { path: 'about', component: About },
    { path: 'programs', component: Programs },
    { path: 'join', component: Join },
    { path: '**', redirectTo: '' }
];
