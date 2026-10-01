FROM node:24-alpine AS build

WORKDIR /nodeapp
COPY package*.json ./
RUN npm ci --omit=dev 

FROM node:24-alpine

WORKDIR /nodeapp

COPY --from=build /nodeapp/node_modules ./node_modules
COPY . .

# RUN groupadd node && \
#    useradd -g node node && \
#    chown -R node:node /nodeapp
#since node user exists

RUN chown -R node:node /nodeapp

USER node

EXPOSE 3000
CMD ["npm", "start"]