import { NgModule } from '@angular/core';

import { AUTH_PROVIDERS } from './angular2-jwt';
import { AuthHttp } from './auth-http.service';

@NgModule({
  imports:      [],
  declarations: [],
  bootstrap:    [],
  providers: [
      ...AUTH_PROVIDERS,
      AuthHttp
  ]
})
export class JwtModule { }