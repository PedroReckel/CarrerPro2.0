FROM node:16.20.2

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g pm2

COPY . .

RUN chmod +x app.js

EXPOSE 4001

CMD ["pm2-runtime", "start", "app.js", "--name", "knowledge-backend"]