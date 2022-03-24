const last = (arr: Array<number>) => arr[arr.length - 1];

const l1 = last([1, 2, 3]);
// const l2 = last(['a', 'b']); // error

// Generics: dynamic types, if you don't know the type
const lastT = <T>(arr: Array<T>): T => arr[arr.length - 1];
const l3 = lastT([1, 2, 3]);
const l4 = lastT(['a', 'b']);
const l5 = lastT<String>(['a', 'b']);

const makeArr = (x: number) => [x];

const m = makeArr(5);
// const m1 = makeArr('a'); // error

const makeArrT = <T>(x: T) => [x];
const m2 = makeArrT(5);
const m3 = makeArrT('a');

const makeArrXY = <X, Y>(x: X, y: Y) => [x, y];
const m4 = makeArrXY(5, 6);
const m5 = makeArrXY('a', 'b');
const m6 = makeArrXY('a', 3);

// Tuple is return type of function
const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y];
const m7 = makeTuple('x', 6);
const m8 = makeTuple('x', 'y');
const m9 = makeTuple<string, number>('a', 1);
const m10 = makeTuple<string | null, number>(null, 3);

const makeTupleWithDefault = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y];
const m11 = makeTupleWithDefault<string | null>('a', 1);

// Generic class
const makeFullName = obj => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const makeFullNameConstraint = (obj: { firstName: string; lastName: string }) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const n1 = makeFullNameConstraint({ firstName: 'a', lastName: 'b' });
// const n2 = makeFullNameConstraint({ firstName: 'a', lastName: 'b', age: 1 }); // error

const makeFullNameConstraintWithGenerics = <T extends { firstName: string; lastName: string }>(obj: T) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const n3 = makeFullNameConstraintWithGenerics({ firstName: 'a', lastName: 'b', age: 30, gender: 'male' });

const addNewEmployee = (employee: object) => {
  const uuid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uuid
  }
}

const addOne = addNewEmployee({name: 'binh', age: 30});
console.log(addOne);
// console.log(addOne.name); // error

const addNewEmployeeT = <T extends object>(employee: T) => {
  const uuid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uuid
  }
}

const empTwo = addNewEmployeeT({name: 'binh', age: 30, male: true});
console.log(empTwo);
console.log(empTwo.name);

const addNewEmployeeTWithContaint = <T extends {name: string}>(employee: T) => {
  const uuid = Math.floor(Math.random() * 100);
  return {
    ...employee,
    uuid
  }
}

// if not name => show error
const empThree = addNewEmployeeTWithContaint({name: 'binh', age: 30});

// GENERIC IN INTERFACE
interface Resource<T> {
  uid: number,
  name: string,
  data: T
}

const resourceOne: Resource<string> = {
  uid: 1,
  name: 'binh',
  data: 'hello'
}

const resourceTwo: Resource<object> = {
  uid: 1,
  name: 'binh',
  data: {name: 'binh'}
}

const resourceThree: Resource<string[]> = {
  uid: 1,
  name: 'binh',
  data: ['hello', 'world']
}
