FROM node:22-alpine

WORKDIR /app

# copy only package.json first
COPY package.json ./
COPY backend/package.json ./backend/
COPY frontend/package.json ./frontend/

# install dependencies in container
RUN npm install --prefix backend && npm install --prefix frontend

# now copy the rest (without node_modules because .dockerignore blocks it)
COPY . .

RUN npm run build --prefix frontend

EXPOSE 3000

CMD ["npm", "run", "start", "--prefix", "backend"]
