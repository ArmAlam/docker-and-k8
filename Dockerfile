FROM node:18

WORKDIR /app

COPY package.json .

RUN npm install

ARG DEFALUT_PORT=80


COPY . .

ENV PORT $DEFALUT_PORT

EXPOSE $PORT

#VOLUME [ "/app/node_modules" ]

CMD [ "npm", "start" ]
