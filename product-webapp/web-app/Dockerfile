FROM node
WORKDIR /app
COPY package.json /app
COPY .env /app
COPY src /app/src
COPY public /app/public
RUN npm i --legacy-peer-deps
CMD ["npm", "run", "start"]