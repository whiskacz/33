// enum Operator {
//     Add = "dodawanie",
//     Subtract = "odejmowanie",
//     Multiply = "mnozenie",
//     Divide = "dzielenie"
// }

// const calculator = function(first: number, second: number, op: Operator){
//     const tuple = operations.find(tpl => tpl[0] === op);
//     // const operation = tuple[1];
//     const result = operation(first, second)
//     return result;
// };
// type Operation = (x: number, y: number) => number;
// const operations: [Operator, Operation][] = [];

// const add = function(first: number, second: number){
//     return first + second;
// }
// operations.push([Operator.Add, add])

// const subtract = function(first: number, second: number){
//     return first - second
// }
// operations.push([Operator.Subtract, subtract])

// const multiply = function(first: number, second: number){
//     return first * second
// }
// operations.push([Operator.Multiply, multiply])

// const divide = function(first: number, second: number){
//     return first * second
// }
// operations.push([Operator.Divide, divide])

// console.log(calculator(2,3, Operator.Add))
// console.log(calculator(23,3, Operator.Subtract))
// console.log(calculator(2,3, Operator.Multiply))
// console.log(calculator(6,3, Operator.Divide))