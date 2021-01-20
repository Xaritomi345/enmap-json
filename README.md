# Enmap-JSON-Sync

![npm](https://img.shields.io/npm/dw/enmap-json-sync) ![npm](https://img.shields.io/npm/v/enmap-json-sync) ![NPM](https://img.shields.io/npm/l/enmap-json-sync) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/enmap-json-sync)

This package allows you to use most of the normal JS Map functions but in the background automatically persists your data to a JSON file. I created this project because I just wanted a simple way to create key pair values and have them automatically save to a file without needing to download and setup a bunch of third party applications such an SQL db. This is perfect for small projects or projects that don't need to persist a lot of data.

> npm i enmap-json-sync

# Examples & Usages

## Create an instance

```js
const EnJS = require('enmap-json-sync');
const Scores = new EnJS('./settings.json');
// Path to a JSON file

(async function () {
  await Scores.loadFromJSON();
})();
```

## Creating

```js
const EnJS = require('enmap-json-sync');
const Scores = new EnJS('./settings.json');
// Path to a JSON file

(async function () {
  await Scores.loadFromJSON();
  // Random ID of a user
  Scores.set('2342342343234234', { name: 'Brandon', score: 10 });
})();
```

## Deleting

```js
const EnJS = require('enmap-json-sync');
const Scores = new EnJS('./settings.json');
// Path to a JSON file

(async function () {
  await Scores.loadFromJSON();
  Scores.delete('2342342343234234');
})();
```

## Updating

```js
const EnJS = require('enmap-json-sync');
const Scores = new EnJS('./settings.json');
// Path to a JSON file

(async function () {
  await Scores.loadFromJSON();
  const currentScore = await Scores.get('2342342343234234').score;
  data.update('2342342343234234', 'score', currentScore++);
})();
```

## Fetch All Keys

```js
const EnJS = require('enmap-json-sync');
const Scores = new EnJS('./settings.json');
// Path to a JSON file

(async function () {
  await Scores.loadFromJSON();
  const scoreKeys = await Scores.keys();
})();
```
