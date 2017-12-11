import * as express from 'express';

declare function universalCookieMiddleware(): express.Handler;
declare namespace universalCookieMiddleware {}
export = universalCookieMiddleware
