# syntax=docker/dockerfile:1
FROM node:12.8.1
ENV NODE_ENV=production
WORKDIR /FreeCodeFirst
COPY ['package.json','package-lock.json*','./']
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["node","bin/www"]