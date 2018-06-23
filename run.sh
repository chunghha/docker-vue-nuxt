#!/usr/bin/env bash

npx nuxt build
docker stop vue-nuxt
docker rm -v vue-nuxt
docker build . -t vue-nuxt
docker run --name vue-nuxt -d -p 3000:3000 vue-nuxt
docker ps
