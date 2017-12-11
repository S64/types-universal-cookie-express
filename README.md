# @types/universal-cookie-express

TypeScript definitions for [universal-cookie-express](https://github.com/reactivestack/cookies/tree/master/packages/universal-cookie-express).

## Installation

```javascript
{
  "dependencies": {
    "universal-cookie": "^2.1.2",
    "universal-cookie-express": "^2.1.2"
  },
  "devDependencies": {
    "@types/universal-cookie": "git+ssh://git@github.com:S64/types-universal-cookie.git#v2.1.2-1",
    "@types/universal-cookie-express": "git+ssh://git@github.com:S64/types-universal-cookie-express.git#v2.1.2-1"
  }
}
```

## Example

```typescript
import * as universalCookieMiddleware from 'universal-cookie-express';
import { UniversalCookieRequest } from 'universal-cookie-express';

app
  .use(universalCookieMiddleware())
  .use((req: Request & UniversalCookieRequest, res: Response) => {
    req.universalCookies!.get('myCat');
  });
```
