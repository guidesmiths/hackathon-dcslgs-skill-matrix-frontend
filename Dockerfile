FROM node:12.4

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

RUN cd frontend && npm ci

RUN npm run build
RUN npm run manifest

EXPOSE 8080
CMD [ "npm", "start" ]
