FROM node:12.2.0-alpine
WORKDIR /server
COPY . .
RUN npm install
EXPOSE 5000
CMD ["node", "server.js"]