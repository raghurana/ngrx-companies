import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<nav class="navbar navbar-default">
              <a class="navbar-brand" [routerLink]="['/home']">ngrx companies</a>
              <ul class="nav navbar-nav navbar-right">
                <li class="nav-item" [routerLinkActive]="'active'">
                  <a [routerLink]="['/company/list']">Companies</a>
                </li>
              </ul>
            </nav>

            <div class="container">
              <router-outlet></router-outlet>
            </div>`,
})
export class AppComponent {

}
