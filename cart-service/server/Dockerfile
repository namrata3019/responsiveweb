FROM node

WORKDIR /server/
COPY package.json /server/
COPY src /server/src


RUN npm install --legacy-peer-deps



CMD ["node" , "src/server.js"]