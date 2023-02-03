FROM node:18-alpine3.15

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY ./app/package.json ./
COPY ./app/package-lock.json ./
COPY ./app/public ./public/
COPY ./app/src ./src/
COPY ./app/build ./build/
COPY ./app/README.md ./
RUN npm install -g npm@9.3
RUN npm install serve
RUN npm install --silent

EXPOSE 8080

# start app
CMD ["serve", "-s", "build", "-l", "8080"]
