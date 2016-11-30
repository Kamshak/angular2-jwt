import { Http, RequestOptions } from '@angular/http';
import { Provider } from "@angular/core";

import { IAuthConfigOptional, AuthConfig } from './auth-config';
import { AuthHttp } from './auth-http.service';

export function AuthHttpFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

export const AUTH_PROVIDERS: Provider[] = [
  {
    provide: AuthHttp,
    deps: [Http, RequestOptions],
    useFactory: AuthHttpFactory
  }
];

export function provideAuth(config?: IAuthConfigOptional): Provider[] {
  return [
    {
      provide: AuthHttp,
      deps: [Http, RequestOptions],
      useFactory: AuthHttpFactory
    }
  ];
}