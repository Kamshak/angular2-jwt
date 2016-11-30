import { Injectable, Optional, OpaqueToken, Inject } from "@angular/core";
import { objectAssign } from './object-assign';

export const AUTH_CONFIG: OpaqueToken = new OpaqueToken("AuthConfig"); // provide a IAuthConfigOptional under this token to overwrite defaults

export interface IAuthConfig {
  globalHeaders: Array<Object>;
  headerName: string;
  headerPrefix: string;
  noJwtError: boolean;
  noTokenScheme?: boolean;
  tokenGetter: () => string | Promise<string>;
  tokenName: string;
}

// Needs to be a class for AOT to work 
export /*interface*/ class IAuthConfigOptional {
    headerName?: string;
    headerPrefix?: string;
    tokenName?: string;
    tokenGetter?: () => string | Promise<string>;
    noJwtError?: boolean;
    globalHeaders?: Array<Object>;
    noTokenScheme?: boolean;
}

export class AuthConfigConsts {
    public static DEFAULT_TOKEN_NAME = 'id_token';
    public static DEFAULT_HEADER_NAME = 'Authorization';
    public static HEADER_PREFIX_BEARER = 'Bearer ';
}

const AuthConfigDefaults: IAuthConfig = {
    headerName: AuthConfigConsts.DEFAULT_HEADER_NAME,
    headerPrefix: null,
    tokenName: AuthConfigConsts.DEFAULT_TOKEN_NAME,
    tokenGetter: () => localStorage.getItem(AuthConfigDefaults.tokenName) as string,
    noJwtError: false,
    globalHeaders: [],
    noTokenScheme: false
};

/**
 * Sets up the authentication configuration.
 */

@Injectable()
export class AuthConfig {

  private _config: IAuthConfig;

  constructor(@Optional() @Inject(AUTH_CONFIG) config?: IAuthConfigOptional) {
    config = config || {};
    this._config = objectAssign({}, AuthConfigDefaults, config);
    if (this._config.headerPrefix) {
      this._config.headerPrefix += ' ';
    } else if (this._config.noTokenScheme) {
      this._config.headerPrefix = '';
    } else {
      this._config.headerPrefix = AuthConfigConsts.HEADER_PREFIX_BEARER;
    }
  }

  public getConfig():IAuthConfig {
    return this._config;
  }

}