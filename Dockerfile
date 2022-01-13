FROM node:12-alpine

RUN  mkdir -p /home/163music-v3

COPY . /home/163music-v3

WORKDIR /home/163music-v3

COPY package.json /home/163music-v3/

RUN npm config set registry "https://registry.npm.taobao.org/" \
    && npm install -g npm husky \
    && npm install --production

EXPOSE 8003
CMD ["node", "app.js"]
