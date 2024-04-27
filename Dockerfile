FROM node:18

WORKDIR /haebelyn/
COPY . /haebelyn/

RUN yarn install
RUN yarn build
CMD yarn start
