FROM --platform=linux/amd64 node:16-slim as builder

WORKDIR /usr/src/app

COPY package.json package-lock.json  ./

RUN npm ci

COPY tsconfig.json ./

COPY . .

RUN npm install -g etsc && \
    npm install -g tsc-alias

RUN npm run build

FROM --platform=linux/amd64 node:16-slim

WORKDIR /usr/src/app

COPY package.json package-lock.json tsconfig.json ./

RUN npm install --omit=dev && npm cache clean --force

COPY --from=builder /usr/src/app/build ./build

CMD ["node", "build/server.js"]