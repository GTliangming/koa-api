FROM node:12-alpine

RUN  mkdir -p /home/music-api

COPY . /home/music-api

WORKDIR /home/music-api

COPY package.json /home/music-api/

RUN npm config set registry "https://registry.npm.taobao.org/" \
    && npm install -g npm husky \
    && npm install --production

EXPOSE 7002
CMD ["node", "app.js"]
