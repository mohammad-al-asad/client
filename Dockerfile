# 1. Use an official Node image as the base
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# 4. Copy the rest of your project
COPY . .

# 5. Build the Next.js app
RUN npm run build

# 6. Set environment variables if needed
ENV NODE_ENV production

# 7. Expose port 3000
EXPOSE 3000

# 8. Start the app
CMD ["npm", "start"]
