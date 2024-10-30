FROM node:lts-alpine AS builder 
WORKDIR /app 
COPY package*.json ./ 
RUN apk add --no-cache make gcc g++ python3 && \ 
    npm install --prefer-offline --no-audit --progress=false && \ 
    npm cache clean --force 
COPY . . 
RUN npm run build 
 
FROM nginx:alpine 
COPY --from=builder /app/dist /usr/share/nginx/html 
COPY nginx.conf /etc/nginx/conf.d/default.conf 
EXPOSE 80 
CMD ["nginx", "-g", "daemon off;"] 