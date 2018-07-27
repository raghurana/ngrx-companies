
NgRx demo app steps

- Make sure @angular/cli is installed globally and is version 6
- create new app by running the command
  ng new ngrx-company --styles=scss
- run the following command to stop generating spec files on new component creation
  ng config schematics.@schematics/angular.component.spec false
- Install bootstrap@3 and add link to min.css under the styles array in angular.json
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
- create navbar in the app.component
- create home module that'll show when no companies are created
  ng g module home --no-spec
- add home.component and have it display soem welcome message
  ng g c home/home
- add home routing module under the home folder
  ng g module home/home-routing --flat --module=home --no-spec
- create app routing module than route to the home module and show the home component in the router-outlet
