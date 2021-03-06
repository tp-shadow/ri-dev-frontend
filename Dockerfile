# STEP 1 build static website
FROM node:alpine as builder

RUN apk update && apk add --update alpine-sdk && apk add --no-cache make git python && apk add --no-cache --virtual .gyp

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json package-lock.json  /app/
RUN npm install @angular/cli -g
RUN cd /app && npm set progress=false && npm install

# Copy project files into the docker image
COPY .  /app

# The build script should be in your package.json file
RUN cd /app && npm run build

# STEP 2 build a small nginx image with static website
FROM nginx:alpine

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' copy website to default nginx public folder
COPY --from=builder /app/nginx-default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/.htaccess /usr/share/nginx/html
COPY --from=builder /app/dist/backend /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
