FROM node:10

ENV NODE_ENV=development
ENV HOST 0.0.0.0

RUN npm i -g yarn
RUN mkdir -p /app
COPY . /app
WORKDIR /app
# Expose the app port
EXPOSE 3000

RUN yarn
RUN yarn build
CMD ["yarn", "start"]
