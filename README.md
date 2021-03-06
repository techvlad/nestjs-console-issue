# Issue with nestjs-console

## Run in development
```bash
npx ts-node -r tsconfig-paths/register src/cli.ts test test
Test
```

## Build app with package
```bash
npm run build

> nestjs-console-issue@0.0.1 prebuild /home/hex/Sandbox/nestjs-console-issue
> rimraf dist


> nestjs-console-issue@0.0.1 build /home/hex/Sandbox/nestjs-console-issue
> nest build

node_modules/nestjs-console/dist/helpers.d.ts:1:8 - error TS1259: Module '"/home/hex/Sandbox/nestjs-console-issue/node_modules/nestjs-console/node_modules/ora/index"' can only be d
efault-imported using the 'esModuleInterop' flag

1 import ora from 'ora';
         ~~~

  node_modules/nestjs-console/node_modules/ora/index.d.ts:269:1
    269 export = ora;
        ~~~~~~~~~~~~~
    This module is declared with using 'export =', and can only be used with a default import when using the 'esModuleInterop' flag.
node_modules/nestjs-console/dist/interfaces.d.ts:1:8 - error TS1259: Module '"/home/hex/Sandbox/nestjs-console-issue/node_modules/commander/typings/index"' can only be default-impo
rted using the 'esModuleInterop' flag

1 import commander from 'commander';
         ~~~~~~~~~

  node_modules/commander/typings/index.d.ts:386:1
    386 export = commander;
        ~~~~~~~~~~~~~~~~~~~
    This module is declared with using 'export =', and can only be used with a default import when using the 'esModuleInterop' flag.

Found 2 error(s).

npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! nestjs-console-issue@0.0.1 build: `nest build`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the nestjs-console-issue@0.0.1 build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/hex/.npm/_logs/2020-04-29T16_46_46_293Z-debug.log
```

## Run in production after failed build
```bash
node dist/cli.js test test
Test
```

## App generated by default nestjs cli

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](LICENSE).
