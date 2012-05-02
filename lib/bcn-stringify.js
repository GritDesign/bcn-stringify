/*
 * given an object, convert into a bcn javascript string
 */ 

exports.stringify = function stringify(obj) {
    var type = typeof(obj);

    switch (type) {
        case "string":
            return JSON.stringify(obj);

        case "object":
            if (Buffer.isBuffer(obj)) {
               return "\"\\u0000 binary " + obj.toString("base64") + "\"";
            } else if (Array.isArray(obj)) {
                var bits = [];
                bits.push("[");
                for (var i=0; i<obj.length; i++) {
                    if (i>0) {
                       bits.push(",");
                    }
                    bits.push(stringify(obj[i]));
                } 
               bits.push("]");
               return bits.join("");
            } else if (obj === null) {
               return "null";
            } else {
                var keys = Object.keys(obj);
                keys.sort();

                var bits = [];
                bits.push("{");
                var first = true;
                for (var i=0; i<keys.length; i++) {
                    // skip functions
                    if (typeof obj[keys[i]] === "function") {
                        continue;
                    }

                    if (first) {
                        first = false;
                    } else {
                       bits.push(",");
                    }
                    bits.push(JSON.stringify(keys[i])); 
                    bits.push(":"); 
                    bits.push(stringify(obj[keys[i]]));
                } 
                bits.push("}");
                return bits.join("");
            }
            break;
        case "undefined":
            throw Error("Can't stringify undefined value, not allowed");

        default:
            return(JSON.stringify(obj)); 
    }

}
