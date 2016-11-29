import { NgModule } from '@angular/core';
import { AUTH_PROVIDERS, AuthHttp } from './angular2-jwt';

@NgModule({
  imports:      [],
  declarations: [],
  bootstrap:    [],
  providers: [
      ...AUTH_PROVIDERS,
      AuthHttp
  ]
})
export class Angular2JwtModule { }