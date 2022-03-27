# Daigaku Database

[daigakudatabase.com](https://daigakudatabase.com) is a website for students to easily search colleges and universities
in the U.S. and get useful information.

## Demo

https://user-images.githubusercontent.com/44737273/157153881-482a6a64-823b-4174-adf9-85f98e73c401.mp4

## Tech

DaigakuDatabase uses esbuild and pnpm to achieve lightning fast build times for Typescript and React.

| tech                                 | purpose | notes |
|--------------------------------------|---|------|
| [vite](https://github.com/vitejs/vite)                                 | React / Typescript build tool for [ ddb-web ](https://github.com/DrPoppyseed/daigakudatabase/tree/to-monorepo/packages/ddb-web). | -    |
| [etsc](https://github.com/a7ul/esbuild-node-tsc)                                 | tsc but with esbuild. Typescript transpiler for [ ddb-api ](https://github.com/DrPoppyseed/daigakudatabase/tree/to-monorepo/packages/ddb-api) express app. | -    |
| [pnpm](https://github.com/pnpm/pnpm) | Package manager / monorepo workspace manager | -    |

## Layout

| name                                                                                              | description |
|---------------------------------------------------------------------------------------------------|---|
| [ ddb-web ](https://github.com/DrPoppyseed/daigakudatabase/tree/to-monorepo/packages/ddb-web)     | react frontend |
| [ ddb-api ](https://github.com/DrPoppyseed/daigakudatabase/tree/to-monorepo/packages/ddb-api)     | express api |
| [ddb-entity](https://github.com/DrPoppyseed/daigakudatabase/tree/to-monorepo/packages/ddb-entity) | where all the shared types are stored |

## Motivation

I first created the bulk of the website in spring 2021 as a project to learn web development and data visualization.
After a year, I decided to revisit the project and give it some much-needed updates, as well as adding new features and
brushing up old ones while I was at it. This project now serves as a fun workbench to learn or try out new things. Some
things I would like to work on is writing better tests, creating a cicd pipeline, adding caching (cloudflare + redis?)
for both the api and the frontend, and faster page loads.

## Tasks

You can see the ongoing tasks for the codebase
from [this trello board](https://trello.com/invite/b/vETEHdNh/a0825ebb890d9ff6e35b8bbc6170dc83/daigaku-database)
.

## Environments

- The active dev branch is hosted on [daigakudatabase-dev.netlify.app](https://daigakudatabase-dev.netlify.app/)
- The production branch [no-images-setup](https://github.com/DrPoppyseed/daigakudatabase-client/tree/no-images-setup)
  is hosted on [daigakudatabase.com](https://daigakudatabase.com)

## Contact

You can reach me directly from [peaske16180@gmail.com](mailto:peaske16180@gmail.com)
