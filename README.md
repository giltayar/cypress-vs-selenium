# Cypress vs Selenium

Companion code for "Cypress vs Selenium WebDriver: Better, or just different?" talk

## How to Install

First, install:

```sh
npm ci # or use the more traditional `npm install`
```

## How to run the Selenium Tests

Just run `npm run test:selenium`

## How to run the Cypress Tests

Run `npm run cypress`. This will open Cypress and let you run the individual tests.

Note that for the `todo-visuals.spec.js` tests, you need to have an Applitools API Key, which you can
get for free by signing up [here](https://applitools.com/users/register), and setting your APPLITOOLS_API_KEY
environment variable to it.

If you want to run _all_ the tests, headless, just run `npm run test:cypress`.
