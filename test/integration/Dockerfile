FROM node:12-slim
WORKDIR /home/node
COPY package*.json ./
RUN npm install
CMD npx mocha test/integration/**/*.spec.js
