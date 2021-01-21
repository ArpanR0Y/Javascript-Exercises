const sumAll = function(start, end) {
    if (typeof start != "number" || typeof end != "number") {
        return "ERROR";
    } else if (start < 0 || end < 0) {
        return "ERROR";
    } else {
        if (start > end) {
            let temp;
            temp = start;
            start = end;
            end = temp;
        }
        let total = 0;
        for (let i = start; i <= end ; i++) {
            total += i;
        }
        return total;
    }
}

module.exports = sumAll
