# Stage 1: Build
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve
FROM node:20-alpine

WORKDIR /app

# Install serve to host the static files
RUN npm install -g serve

COPY --from=build /app/dist ./dist

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://localhost:3000/ || exit 1

CMD ["serve", "-s", "dist", "-l", "3000"]
