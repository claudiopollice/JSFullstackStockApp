FROM node:12
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY . .
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
EXPOSE 3000
CMD ["npm", "start"]
