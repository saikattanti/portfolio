# Portfolio Next.js - Docker Deployment Guide

This guide explains how to build and run your Next.js portfolio application using Docker.

## 📋 Prerequisites

- Docker Desktop installed and running
- Git (for cloning the repository)

## 🚀 Quick Start

### Method 1: Using Docker Commands

1. **Build the Docker image:**
   ```bash
   docker build -t portfolio-nextjs .
   ```

2. **Run the container:**
   ```bash
   docker run -d -p 3000:3000 --name portfolio-container portfolio-nextjs
   ```

3. **Access your application:**
   Open your browser and navigate to `http://localhost:3000`

### Method 2: Using NPM Scripts

We've added convenient NPM scripts for Docker operations:

```bash
# Build Docker image
npm run docker:build

# Run Docker container
npm run docker:run

# Use Docker Compose (recommended)
npm run docker:compose

# Stop Docker Compose
npm run docker:down
```

### Method 3: Using Docker Compose (Recommended)

```bash
# Start the application
docker-compose up -d

# Stop the application
docker-compose down
```

## 🐳 Docker Configuration

### Dockerfile Features

- **Multi-stage build** for optimized image size
- **Node.js 18 Alpine** base image for security and small footprint
- **Bun package manager** for faster dependency installation
- **Sharp library** included for optimized image processing
- **Non-root user** for enhanced security
- **Standalone output** for minimal runtime dependencies

### Key Components

1. **Base Stage**: Node.js 18 Alpine
2. **Dependencies Stage**: Installs Bun and project dependencies
3. **Builder Stage**: Builds the Next.js application
4. **Runner Stage**: Production runtime with minimal footprint

## 📁 Files Added

- `Dockerfile` - Multi-stage Docker build configuration
- `docker-compose.yml` - Docker Compose configuration
- `.dockerignore` - Files to exclude from Docker build context
- `next.config.js` - Updated with standalone output configuration

## 🔧 Environment Variables

The container runs with the following environment variables:

- `NODE_ENV=production`
- `NEXT_TELEMETRY_DISABLED=1`
- `PORT=3000`
- `HOSTNAME=0.0.0.0`

## 🛠️ Docker Commands Reference

### Container Management
```bash
# List running containers
docker ps

# Stop container
docker stop portfolio-container

# Remove container
docker rm portfolio-container

# View container logs
docker logs portfolio-container

# Execute command in running container
docker exec -it portfolio-container sh
```

### Image Management
```bash
# List images
docker images

# Remove image
docker rmi portfolio-nextjs

# Build with no cache
docker build --no-cache -t portfolio-nextjs .
```

## 🚀 Production Deployment

### For Production Servers

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd portfolio-nextjs
   ```

2. **Build and run:**
   ```bash
   docker-compose up -d
   ```

3. **Set up reverse proxy (optional):**
   - Configure Nginx or Apache to proxy to port 3000
   - Set up SSL/TLS certificates

### Docker Hub Deployment

1. **Tag your image:**
   ```bash
   docker tag portfolio-nextjs your-username/portfolio-nextjs:latest
   ```

2. **Push to Docker Hub:**
   ```bash
   docker push your-username/portfolio-nextjs:latest
   ```

3. **Pull and run on production:**
   ```bash
   docker pull your-username/portfolio-nextjs:latest
   docker run -d -p 3000:3000 your-username/portfolio-nextjs:latest
   ```

## 🔍 Troubleshooting

### Common Issues

1. **Port already in use:**
   ```bash
   # Use different port
   docker run -d -p 3001:3000 --name portfolio-container portfolio-nextjs
   ```

2. **Image build fails:**
   ```bash
   # Clear Docker cache and rebuild
   docker system prune -f
   docker build --no-cache -t portfolio-nextjs .
   ```

3. **Container won't start:**
   ```bash
   # Check logs
   docker logs portfolio-container
   ```

### Performance Optimization

- The Docker image uses Next.js standalone output for minimal size
- Sharp library is included for optimized image processing
- Multi-stage build reduces final image size
- Alpine Linux base image for security and size

## 📊 Image Information

- **Base Image**: node:18-alpine
- **Final Image Size**: ~150MB (approximate)
- **Architecture**: Multi-stage build
- **User**: Non-root (nextjs:nodejs)
- **Port**: 3000
- **Health Check**: Built-in Next.js health monitoring

## 🎯 Next Steps

1. Set up CI/CD pipeline for automated builds
2. Configure monitoring and logging
3. Set up SSL/TLS certificates for HTTPS
4. Configure environment-specific settings
5. Set up backup and disaster recovery

---

**Note**: This Docker configuration is production-ready and includes security best practices, optimized build process, and minimal runtime footprint.
