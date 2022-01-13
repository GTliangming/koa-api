FROM node:12-alpine

RUN  mkdir -p /home/163music-v2

COPY . /home/163music-v2

WORKDIR /home/163music-v2

COPY package.json /home/163music-v2/

RUN    rm package-lock.json \
    ; rm -rf .idea \
    ; rm -rf node_modules \
    ; npm config set registry "https://registry.npm.taobao.org/" \
    && npm install

EXPOSE 8002
CMD ["node", "app.js"]
