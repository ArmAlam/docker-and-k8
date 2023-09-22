FROM node:18

ARG DEFALUT_PORT=80

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV PORT $DEFALUT_PORT

EXPOSE $PORT

#VOLUME [ "/app/node_modules" ]

CMD [ "npm", "start" ]
