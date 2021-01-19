# Enmap-JSON-Sync

This package allows you to use most of the normal JS Map function but in the background automatically persists your data to a JSON file. I created this project because I just wanted a simple way to create key pair values and have them automatically save to a file.

> npm i enmap-json-sync

# Examples & Usages

## Create an instance

```javacript
const EnJS = require("enmap-json-sync")
const Scores = new EnJS("./settings.json") // Path to a JSON file

(async function() {
	await Scores.loadFromJSON();
})()
```

## Creating

```javacript
const EnJS = require("enmap-json-sync")
const Scores = new EnJS("./settings.json") // Path to a JSON file

(async function() {
	await Scores.loadFromJSON();
	// Random ID of a user
	Scores.set("2342342343234234", {name: "Brandon", score: 10})
})()
```

## Deleting

```javacript
const EnJS = require("enmap-json-sync")
const Scores = new EnJS("./settings.json") // Path to a JSON file

(async function() {
	await Scores.loadFromJSON();
	Scores.delete("2342342343234234")
})()
```

## Updating

```javacript
const EnJS = require("enmap-json-sync")
const Scores = new EnJS("./settings.json") // Path to a JSON file

(async function() {
	await Scores.loadFromJSON();
	const currentScore = await Scores.get("2342342343234234").score
	data.update("2342342343234234", "score", currentScore++)
})()
```

## Fetch All Keys

```javacript
const EnJS = require("enmap-json-sync")
const Scores = new EnJS("./settings.json") // Path to a JSON file

(async function() {
	await Scores .loadFromJSON();
	const scoreKeys = await Scores.keys();
})()
```
