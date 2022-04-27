# Overview

React native for ios android and web using typescript.

Includes

- iOS
- Android
- Web
- Typescript
- Jest
- ES Lint


# Getting Started

## Install brew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

## Install dependencies

```bash
brew install node
brew install watchman

sudo gem install cocoapods
npm install -g react-native-cli
```

## Install application

```bash
gh repo clone rickyphan/react-native-web-typescript-template

cd react-native-web-typescript-template
npm install

cd ios && pod install && cd ../
```

## Start application

```
npm run build
npm run web
npm run ios
npm run android
```

# Development

## Lint

```bash
npm run lint
```

## Test

```bash
npm test
```

# Troubleshooting

```
npx react-native start --reset-cache
```

# Helpful links

https://reactnative.dev/docs/0.64/environment-setup


# Creating an App from Scratch

```
npx react-native init example

npm install --save-dev 

npm install --save-dev @babel/preset-env @babel/preset-react @babel/preset-typescript

```

