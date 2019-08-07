FROM node:11 as build
WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
RUN  npm install

COPY . .
RUN  npm run build


FROM httpd:2-alpine
COPY apache/*.conf /usr/local/apache2/conf/
COPY --from=build /usr/src/app/build/ /usr/local/apache2/htdocs/
