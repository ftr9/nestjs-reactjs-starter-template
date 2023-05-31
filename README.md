<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Nest.Js + React.Js + vite starter code template

Nest js + react js starter template. react js uses vite as a bundler

# How it Works ?

to run nest js in production you first have to bundle your code by running yarn build

after running yarn build following things are happening -

1. generate backend code bundeled version
2. go to frontend code where react.js code is present
3. generate bundeled version of react.js code in frontend folder
4. copy that bundeled version of frontend folder's react.js code to client folder

Now nest js is going to serve that react page from client folder

## Installation

install all the backend server dependencies

```bash
$ yarn install
```

after installing the backend server dependencies go the frontend frontend and run below command

```bash
$ npm i
```

## Running the app

```bash
# development
$ yarn run start

# watch mode starts the backend and client server concurrently
$ yarn run start:dev

# production mode
$ yarn run start:prod

# build mode first generates bundeled version of backend code and generate bundeled version of frontend code
$ yarn build

```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
