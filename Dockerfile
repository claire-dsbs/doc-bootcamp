FROM node:18-alpine3.15

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY ./app/package.json ./
COPY ./app/package-lock.json ./
RUN npm install --silent

EXPOSE 3000

# start app
CMD ["npm", "start"]
