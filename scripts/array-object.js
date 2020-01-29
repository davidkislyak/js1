function arrToObj($inputArr) {
    let result = {
        strings: [],
        numbers: [],
        booleans: []
    };

    for (let element of $inputArr) {
        if (typeof(element) == "number") {
            result.numbers.push(element);
        } else if (typeof(element) == "boolean") {
            result.booleans.push(element);
        } else if (typeof(element) == "string") {
            result.strings.push(element);
        }
    }

    return result;
}