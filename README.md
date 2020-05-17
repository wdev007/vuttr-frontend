# VUTTR - Very Useful Tools to Remember

<p>Gerenciador de ferramentas com seus respectivos nomes, links, descrições e tags.</p>

Build Status: [![CircleCI](https://circleci.com/gh/wellici-js/vuttr-frontend.svg?style=svg)](https://circleci.com/gh/wellici-js/vuttr-frontend)
Size: ![GitHub](https://img.shields.io/github/repo-size/wellici-js/vuttr-frontend)

## Table of contents

- [Getting Started](#getting-started)
- [Dependences](#dependences)
- [Development environment](#development-environment)
- [Documentation and Testes](#documentation)

## Getting Started

- The project depends on a backend to work, it can be the [API made in node](https://gitlab.com/wellici-js/bossabox-backend.git) or the one made available by the challenge [api-challenge](https://gitlab.com/bossabox/challenge-fake-api/tree/master).

## Dependences

- You need to have installed:
  > node >= V10
  > npm or yarn
  > json-server
  > Browser of your choice

## Development environment

- Install repository back-end:
  - API node:
    [steps](https://gitlab.com/wellici-js/bossabox-backend)
  - API challenge:
  ```sh
    $ git clone https://gitlab.com/bossabox/challenge-fake-api/tree/master
    $ cd challenge-fake-api
    $ json-server --watch db.json --port 3000
  ```
- Install repository front-end:

  ```sh
    $ git clone https://github.com/wellici-js/vuttr-frontend.git
  ```

- Rename the file:

  ```sh
    $ cp .env.example .env
  ```

- overwrite information in .env

  ```
    REACT_APP_API_URL=urltoapplicationbackend
  ```

- Install dependences:

  ```sh
    $ yarn
  ```

  - or

  ```sh
    $ npm i
  ```

- Run:

  ```sh
    $ yarn start
  ```

  - or

  ```sh
    $ npm run start
  ```

## Documentation

- To see the application component documentation:
  ```sh
    $ yarn storybook
  ```
  or
  ```sh
    $ npm run storybook
  ```
- To run Testes:
  ```sh
    $ yarn test
  ```
  - or
  ```sh
    $ npm run test
  ```
