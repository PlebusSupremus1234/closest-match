# What does this module do?

This module finds the closest string match or matches in an array using [Levenshtein Distance](https://en.wikipedia.org/wiki/Levenshtein_distance)

# Installation

`npm i closest-match --save`

# Usage

```js
const closest_match = require("closest-match");
closest_match(target, array);
//sometimes there can be more than one equally close word, so you can add a max
closest_match(target, array, max);
```

# Examples

```js
const closest_match = require("closest-match");

//normal usage
console.log(closest_match("dag", ["dog", "pumpkin"])); //dog

//multiple values if some words are equally different from the target
console.log(closest_match("hello", ["jello", "yellow", "bello"], 2)); //["jello", "bello"]

```