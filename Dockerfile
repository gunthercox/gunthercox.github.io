FROM node:20-alpine

WORKDIR /site

COPY package.json ./
RUN npm install

CMD ["npm", "run", "watch"]
