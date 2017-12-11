import * as express from 'express';
import Cookies from 'universal-cookie';

declare function universalCookieMiddleware(): express.Handler;
declare namespace universalCookieMiddleware {

  export interface UniversalCookieRequest {
    universalCookies?: Cookies
  }

}
export = universalCookieMiddleware
