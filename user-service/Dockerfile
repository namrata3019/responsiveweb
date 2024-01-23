FROM node

WORKDIR /server

COPY package.json /server/
COPY . .

RUN npm install --legacy-peer-deps


CMD ["node" , "server.js"]