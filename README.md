# Is array same

A simple package to check if two arrays are similar

### Installation

```terminal
npm i is-array-same
```

OR

```terminal
yarn add is-array-same
```

## Usage

```javascript
const { isArraySame } = require("is-array-same");

// usage
isArraySame(arr1, arr2));

// Example 1
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
isArraySame(arr1, arr2); // true

// Example 2
const arr3 = [1, 2, 3];
const arr4 = [1, 2, 3, 4];
isArraySame(arr3, arr4); // false

```
