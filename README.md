# bracket-balance - get the difference between opening and closing brackets in a string

## Installation
`npm install bracket-balance --save`

## Example
```
const bracketBalance = require('bracket-balance');
let exampleString = '{hello{{ ]}';

bracketBalance(exampleString(exampleString, '{}');
//returns 2 because there are 2 more opening than closing brackets
```

## Definition

### Arguments

1. `String` to search through
2. `String` containing a pair of brackets (`'{}'`, `'()'` or `'[]'`)

### Returns

`Number` representing the difference between opening and closing brackets

- __bigger than 0__ means there are more opening than closing brackets
- __exactly 0__ means that there is an closing one for each opening bracket
- __smaller than 0__ means there are more closing than opening brackets
