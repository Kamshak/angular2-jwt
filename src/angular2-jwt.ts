import { Provider } from "@angular/core";
import { Http, RequestOptions } from '@angular/http';

import { IAuthConfigOptional, AuthConfig, AUTH_CONFIG } from './auth-config';
import { AuthHttp } from './auth-http.service';

export function authHttpFactory(authConfig: AuthConfig, http: Http, options: RequestOptions) {
  return new AuthHttp(authConfig, http, options);
}

export const AUTH_PROVIDERS: Provider[] = [
  {
    provide: AuthHttp,
    deps: [AuthConfig, Http, RequestOptions],
    useFactory: authHttpFactory
  }
];

export function provideAuth(config?: IAuthConfigOptional): Provider[] {
  return [
    {
      provide: AUTH_CONFIG,
      useValue: config
    },
    {
    	provide: AuthHttp,
    	deps: [AuthConfig, Http, RequestOptions],
    	useFactory: authHttpFactory
    }
  ];
}