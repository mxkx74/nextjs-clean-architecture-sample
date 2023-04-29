FROM node:lts-alpine3.16

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --cache-folder .ycache && rm -rf .ycache
