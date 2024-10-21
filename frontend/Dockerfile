FROM node:16 AS build
WORKDIR /app
COPY package*.json ./
ARG REACT_APP_API_URL=https://psbg-psdemo.adnovumlabs.com
ENV REACT_APP_API_URL=$REACT_APP_API_URL
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
