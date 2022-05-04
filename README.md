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

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

## Install dependencies

```
brew install node
brew install watchman

sudo gem install cocoapods

npm install -g yarn
npm install -g react-native-cli
```

## Install application

```
gh repo clone rickyphan/react-native-web-typescript-template

cd react-native-web-typescript-template
npm install

cd ios && pod install && cd ../
```

## Start application

```
yarn build
yarn web
yarn ios
yarn android
```

# Development

## Lint

```
yarn lint
```

## Test

```
yarn test
```

# Troubleshooting

```
npx react-native start --reset-cache

```

```
yarn clean
yarn install
```
