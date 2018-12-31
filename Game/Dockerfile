FROM node:alpine

WORKDIR /usr/src/app

COPY package.json .

COPY package-lock.json .


RUN npm install

COPY . .

EXPOSE 6666

CMD ["npm", "start"]