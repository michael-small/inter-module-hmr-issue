import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <button routerLink="a">Go to A</button>
        <button routerLink="b">Go to B</button>
        <button routerLink="">Home</button>
        <router-outlet />
    `,
    standalone: false
})
export class AppComponent {
    title = 'inter-module-hmr-issue';
}
