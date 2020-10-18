FROM node:12
WORKDIR /usr/dist
COPY package*.json ./
RUN npm install
COPY dist/* ./
EXPOSE 8081
CMD [ "node", "app.js" ]
