## Use Node Alpine image
FROM node:16

RUN apt-get update

# Create app directory
RUN mkdir -p /app

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
