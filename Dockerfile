FROM node:19-alpine3.17

# Create app directory
WORKDIR /usr/src/app

# Copy files.
COPY --chown=node:node \ 
    package.json \
    package-lock.json \
    tsconfig.json \
    index.ts \
    ./

# Copy directories.
COPY --chown=node:node src/ src/
COPY --chown=node:node prisma/ prisma/

# Install packages.
RUN npm install

RUN npm run build

EXPOSE 4000

CMD [ "npm", "start" ]