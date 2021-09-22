FROM node:10.4

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080

RUN npm run manifest

CMD [ "npm", "start" ]
