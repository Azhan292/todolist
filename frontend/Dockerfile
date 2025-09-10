# Stage 1
FROM node:21 AS frontend-builder

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

# Stage 2
FROM node:21-slim

WORKDIR /app

COPY --from=frontend-builder /app .

COPY .env.sample .env

EXPOSE 3000

CMD ["npm", "start","--","--host"]


