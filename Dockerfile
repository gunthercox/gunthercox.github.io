FROM node:24-alpine

WORKDIR /site

COPY package.json ./
RUN npm install

CMD ["npm", "run", "watch"]
