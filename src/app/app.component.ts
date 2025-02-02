import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterModule],
    template: `
        <button routerLink="a">Go to A</button>
        <button routerLink="b">Go to B</button>
        <button routerLink="">Home</button>
        <router-outlet />
    `
})
export class AppComponent {
    title = 'inter-module-hmr-issue';
}
