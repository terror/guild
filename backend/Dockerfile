FROM node:12-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 8080
CMD ["node", "dist/"]
