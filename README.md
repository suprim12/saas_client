# Create SaaS React Typescript App 🚀

Combine [Create React App](https://github.com/facebook/create-react-app) with [Typescript](https://www.typescriptlang.org/) and [Eslint](https://eslint.org/)

### Features

- Typesafe
- Supports unit testing
- Storybook (UI/Components Testing)
- Eslint
- Absolute path 🔥

### Dockerize FrontEnd For Development

```
sudo docker build -f Dockerfile -t client .
```

The above command will create an image called client on Docker. To test it, we will create a container that will help us run this image. Port Forwarding to 3000, mount

```
sudo docker run --rm -it --name reduxblog  -p 3000:3000 -v $(pwd):/app client
```

### Dockerize For Production

```
FROM node:alpine as build

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN npm ci --production

COPY . .

RUN npm run build

FROM nginx:1.12-alpine as prod

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx","-g","daemon off;"]
```

```
sudo docker build -f Dockerfile -t client-prod .
```

```
sudo docker run --rm -it --name reduxblog  -p 3000:80 client-prod
```
