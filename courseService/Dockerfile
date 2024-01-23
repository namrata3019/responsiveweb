FROM node

WORKDIR /server

COPY package.json /server/
COPY uploads /server/

RUN npm install --legacy-peer-deps

COPY src /server/src

CMD ["node" , "src/app.js"]