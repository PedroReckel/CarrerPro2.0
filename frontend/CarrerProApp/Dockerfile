FROM node:16.20.2

# Instalação global do Expo CLI
RUN npm install -g expo-cli

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1
EXPOSE 19001
EXPOSE 19002

# Inicia o projeto Expo
CMD ["expo", "start"]