import * as express from 'express';

declare module 'universal-cookie-express' {
  export default function universalCookieMiddleware(): express.Handler;
}
