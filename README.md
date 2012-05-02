# bcn-stringify 

like JSON.stringify except object keys are sorted, also does not allow any extra
whitespace in formated output.

stringify(object) -> json string

### Installation

```
npm install bcn-stringify
```


### Usage

```
var stringify = require("bcn-stringify").stringify;

var result = stringify({ "c":1, "b":2, "a":3});

// result is -> '{"a":3,"b":2,"c":1}'

```






