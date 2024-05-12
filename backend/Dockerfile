# Use uma imagem base do Node.js
FROM node:16

# Crie um diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e o arquivo package-lock.json (se existir) para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install --production

# Instale o PM2 globalmente
RUN npm install -g pm2

# Copie todo o restante do código-fonte para o diretório de trabalho
COPY . .

# Exponha a porta em que a aplicação vai rodar
EXPOSE 4000

# Inicie a aplicação usando o PM2
CMD ["pm2-runtime", "start", "app.js", "--name", "knowledge-backend"]
