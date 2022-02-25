### Stage 1: Build
FROM node:16-alpine3.11 as build-step

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

### Stage 2: Run

FROM nginx:1.21.1-alpine

COPY default.conf /etc/nginx/conf.d/default.conf

COPY --from=build-step /usr/src/app/build /usr/share/nginx/html

EXPOSE 80