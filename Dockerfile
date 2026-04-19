# build stage
# Build stage
FROM oven/bun:latest AS builder

WORKDIR /app
COPY . .

# 👇 build args
ARG VITE_API_URL
ARG VITE_GOOGLE_CLIENT_ID

# 👇 expose ke Vite
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_GOOGLE_CLIENT_ID=$VITE_GOOGLE_CLIENT_ID

# Install dependencies pakai bun
RUN bun install

# Build project
RUN bun run build

# Production stage
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
