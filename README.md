
[![Build Status](https://travis-ci.org/deanilvincent/capitalize-decapitalize.svg?branch=master)](https://travis-ci.org/deanilvincent/capitalize-decapitalize)

# Overview 
NPM package for capitalizing or decapitalizing every first letter of the word. Letter case option (Upper & lower case) for every word in a sentence.

# Installation

`npm i capitalize-decapitalize --save`

# Setup & Basic Usage
```
const letterCase = require('capitalize-decapitalize')

console.log(letterCase('c','hello world')
// Hello World
```
# Additional info & options
|1st Param (upper or lower case format) | 2nd Param |
|--|--|
| **C** - Capitalize first letter of the word  | **String value** |
| **D** - Decapitalize (uncapitalize) first letter of the word
| **UC** - Upper case all words
| **LC** - Lower case all words

### Examples

```
console.log(letterCase('c','hello world')
// Hello World

console.log(letterCase('d','Hello World')
// hello world

console.log(letterCase('uc','Hello World')
// HELLO WORLD

console.log(letterCase('lc','Hello World')
// hello world
```

Feel free to clone or fork this project:  `https://github.com/deanilvincent/capitalize-decapitalize.git`

Contributions & pull requests are welcome!

I'll be glad if you give this project a ★ on [Github](https://github.com/deanilvincent/capitalize-decapitalize) :))

### License

This project is licensed under the MIT License - see the  [LICENSE.md](https://github.com/deanilvincent/capitalize-decapitalize/blob/master/LICENSE) file for details.
