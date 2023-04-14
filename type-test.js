var daysInWeek = 7;
var fullName = "Ada Lovelace";
var isRaining = false;
var add = function (x, y) { return x + y; };
var everything = [daysInWeek, fullName, isRaining, add];
for (var _i = 0, everything_1 = everything; _i < everything_1.length; _i++) {
    var value = everything_1[_i];
    console.log("".concat(value, " ").concat(typeof (value)));
}
