# @innovatrics/eslint-config-typescript-react

Eslint configuration for React projects written in Typescript

## Setup

Based on [Airbnb Typescript](https://github.com/iamturns/eslint-config-airbnb-typescript) config.
Therefore you need to install `eslint-config-airbnb-typescript` along with this package.

### 1. Install configurations
**Prerequisites**
You need to have installed `eslint`, `prettier` and `@typescript-eslint/parser`

**Yarn**

```
yarn add -D @innovatrics/eslint-config-typescript-react \
            eslint-config-airbnb-typescript \
            eslint-config-airbnb-base \
            eslint-config-prettier
```

**NPM**

```
npm install @innovatrics/eslint-config-typescript-react \
            eslint-config-airbnb-typescript \
            eslint-config-airbnb-base \
            eslint-config-prettier \
            --save-dev
```

### 2. Install plugins

**Yarn**

```
yarn add -D @typescript-eslint/eslint-plugin \
            eslint-plugin-import \
            eslint-plugin-jsx-a11y \
            eslint-plugin-prettier \
            eslint-plugin-react \
            eslint-plugin-react-hooks
```

**NPM**

```
npm install @typescript-eslint/eslint-plugin \
            eslint-plugin-import \
            eslint-plugin-jsx-a11y \
            eslint-plugin-prettier \
            eslint-plugin-react \
            eslint-plugin-react-hooks \
            --save-dev
```
