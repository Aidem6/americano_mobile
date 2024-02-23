# Dockerfile

# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and yarn.lock files to the working directory
COPY package.json yarn.lock ./

# Install app dependencies
RUN yarn install --frozen-lockfile

# Copy the entire app directory to the working directory
COPY . .

# Build the app for production
RUN npx react-native bundle --platform android --dev true --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
RUN npx react-native bundle --platform ios --dev true --entry-file index.js --bundle-output ios/main.jsbundle --assets-dest ios/assets

# Build the app for dev
# RUN npx react-native run-ios
# RUN npx react-native run-android

# Expose port 8080 for the React Native packager
EXPOSE 8080

# Start the app
CMD ["npx", "react-native", "start"]