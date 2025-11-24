FROM node:22.20.0-alpine AS builder
WORKDIR /app
ENV PATH=/app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

# RUN apk update && apk add openssl

# RUN openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048 &&\
#     openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/certs/self.key -out /etc/ssl/certs/self.crt \
#     -subj "/C=RU/ST=Moscow/L=Kremlin/O=Roman Corp/OU=Org/CN=space.web"

# COPY nginx/ssl-params.conf /etc/nginx/ssl-params.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
