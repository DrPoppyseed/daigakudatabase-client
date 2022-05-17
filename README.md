# Daigaku Database

[daigakudatabase.com](https://daigakudatabase.com) is a website for students to easily search colleges and universities
in the U.S. and get useful information.

## Demo

https://user-images.githubusercontent.com/44737273/157153881-482a6a64-823b-4174-adf9-85f98e73c401.mp4

## Tech

DaigakuDatabase uses esbuild and pnpm to achieve lightning fast build times for Typescript and React.

| tech                                 | purpose                                                                  | notes |
|--------------------------------------|--------------------------------------------------------------------------|------|
| [vite](https://github.com/vitejs/vite)                                 | React / Typescript build tool for the frontend.                          | [10-20x faster than CRA](https://www.darraghoriordan.com/2021/05/16/migrating-from-create-react-app-to-vite/#:~:text=Vite%20is%2010%2D20%20times,t%20type%20check%20your%20code.)    |
| [etsc](https://github.com/a7ul/esbuild-node-tsc)                                 | tsc but with esbuild. Typescript transpiler for the backend express app. | [3-9x faster than tsc](https://datastation.multiprocess.io/blog/2021-11-13-benchmarking-esbuild-swc-typescript-babel.html)    |

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

## Contact

You can reach me directly from [peaske16180@gmail.com](mailto:peaske16180@gmail.com)
