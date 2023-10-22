FROM node:18.18-alpine3.18

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm ci --legacy-peer-deps

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

ARG GIT_BRANCH
RUN echo "Based on branch: $GIT_BRANCH"
ENV GIT_BRANCH=${GIT_BRANCH}
ARG GIT_COMMIT
RUN echo "Based on commit: $GIT_COMMIT"
ENV GIT_COMMIT=${GIT_COMMIT}

# Start the server using the production build
CMD GIT_BRANCH=${GIT_BRANCH} GIT_COMMIT=${GIT_COMMIT} node dist/main.js
