var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var last = function (arr) { return arr[arr.length - 1]; };
var l1 = last([1, 2, 3]);
// const l2 = last(['a', 'b']); // error
// Generics: dynamic types, if you don't know the type
var lastT = function (arr) { return arr[arr.length - 1]; };
var l3 = lastT([1, 2, 3]);
var l4 = lastT(['a', 'b']);
var l5 = lastT(['a', 'b']);
var makeArr = function (x) { return [x]; };
var m = makeArr(5);
// const m1 = makeArr('a'); // error
var makeArrT = function (x) { return [x]; };
var m2 = makeArrT(5);
var m3 = makeArrT('a');
var makeArrXY = function (x, y) { return [x, y]; };
var m4 = makeArrXY(5, 6);
var m5 = makeArrXY('a', 'b');
var m6 = makeArrXY('a', 3);
// Tuple is return type of function
var makeTuple = function (x, y) { return [x, y]; };
var m7 = makeTuple('x', 6);
var m8 = makeTuple('x', 'y');
var m9 = makeTuple('a', 1);
var m10 = makeTuple(null, 3);
var makeTupleWithDefault = function (x, y) { return [x, y]; };
var m11 = makeTupleWithDefault('a', 1);
// Generic class
var makeFullName = function (obj) { return (__assign(__assign({}, obj), { fullName: "".concat(obj.firstName, " ").concat(obj.lastName) })); };
var makeFullNameConstraint = function (obj) { return (__assign(__assign({}, obj), { fullName: "".concat(obj.firstName, " ").concat(obj.lastName) })); };
var n1 = makeFullNameConstraint({ firstName: 'a', lastName: 'b' });
// const n2 = makeFullNameConstraint({ firstName: 'a', lastName: 'b', age: 1 }); // error
var makeFullNameConstraintWithGenerics = function (obj) { return (__assign(__assign({}, obj), { fullName: "".concat(obj.firstName, " ").concat(obj.lastName) })); };
var n3 = makeFullNameConstraintWithGenerics({ firstName: 'a', lastName: 'b', age: 30, gender: 'male' });
var addNewEmployee = function (employee) {
    var uuid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uuid: uuid });
};
var addOne = addNewEmployee({ name: 'binh', age: 30 });
console.log(addOne);
// console.log(addOne.name); // error
var addNewEmployeeT = function (employee) {
    var uuid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uuid: uuid });
};
var empTwo = addNewEmployeeT({ name: 'binh', age: 30, male: true });
console.log(empTwo);
console.log(empTwo.name);
var addNewEmployeeTWithContaint = function (employee) {
    var uuid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uuid: uuid });
};
// if not name => show error
var empThree = addNewEmployeeTWithContaint({ name: 'binh', age: 30 });
var resourceOne = {
    uid: 1,
    name: 'binh',
    data: 'hello'
};
var resourceTwo = {
    uid: 1,
    name: 'binh',
    data: { name: 'binh' }
};
var resourceThree = {
    uid: 1,
    name: 'binh',
    data: ['hello', 'world']
};
