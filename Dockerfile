FROM node:15.13-alpine
WORKDIR /natiq
ENV PATH="./node_modules./bin:$PATH"
COPY . .
RUN npm run build
CMD [ "npm", "start" ]

# run command: docker run --publish 3000:3000 react