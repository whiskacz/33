var Operator;
(function (Operator) {
    Operator["Add"] = "dodawanie";
    Operator["Subtract"] = "odejmowanie";
    Operator["Multiply"] = "mnozenie";
    Operator["Divide"] = "dzielenie";
})(Operator || (Operator = {}));
var calculator = function (first, second, op) {
    var tuple = operations.find(function (tpl) { return tpl[0] === op; });
    var operation = tuple[1];
    var result = operation(first, second);
    return result;
};
var operations = [];
var add = function (first, second) {
    return first + second;
};
operations.push([Operator.Add, add]);
var subtract = function (first, second) {
    return first - second;
};
operations.push([Operator.Subtract, subtract]);
var multiply = function (first, second) {
    return first * second;
};
operations.push([Operator.Multiply, multiply]);
var divide = function (first, second) {
    return first * second;
};
operations.push([Operator.Divide, divide]);
console.log(calculator(2, 3, Operator.Add));
console.log(calculator(23, 3, Operator.Subtract));
console.log(calculator(2, 3, Operator.Multiply));
console.log(calculator(6, 3, Operator.Divide));
