FROM node

WORKDIR /server

COPY package.json /server/
COPY server.js /server/

RUN npm install --legacy-peer-deps

COPY app /server/app

CMD ["node" , "server"]