var assert = require("assert");

var stringify = require("..").stringify;

var result = stringify({ "c":1, "b":2, "a":3});

assert.ok(result === '{"a":3,"b":2,"c":1}');


