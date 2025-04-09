# Stage 1 - Build frontend
FROM node:18-alpine as frontend

WORKDIR /app/client
COPY client ./
RUN npm install && npm run build

# Stage 2 - Backend + serve frontend
FROM node:18-alpine

WORKDIR /app

# Copy backend package.json files and install dependencies
COPY package*.json ./
RUN npm install

# Copy backend source code
COPY api ./api

# Copy built frontend from stage 1
COPY --from=frontend /app/client/dist ./client/dist

# Expose correct backend port
EXPOSE 3000

# Start backend
CMD ["node", "api/index.js"]
