/**
 * @enum Test enum뭔지 모르겠음
 */

//Boolean
let isTrue: boolean = true;
let isFalse: boolean = false;

//Number
let num: number = 1;

//String
let word: string = "Hello TypeScript!";
let sentence: string = `${word} Im JoY.`;

//Array
/**
 * @arr 일반 배열선언
 */
let arr: number[] = [1, 2, 3];
/**
 * @arrGeneric 제네릭 배열선언
 */
let arrGeneric: Array<number> = [1, 2, 3];

//Tuple
let arrTuple: [number, string] = [1, "1"];

//enum은 아직 잘 모르겠음.
enum Test1 {
  One = 5,
  Two,
  Three,
}
let testOne: Test1 = Test1.One;
let testTwo: string = Test1[6];
// console.log(testOne);
// console.log(testTwo);

//Any
//타입자체를 모를 때.
let anyString: any = "안녕";
let anyNumber: any = 123;
let anyBollean: any = true;
let anyArr: any = [1, 2, "test", anyBollean];
//타입의 일부를 알 때
let anyArr1: any[] = [1, 2, "test", anyBollean];

//Null && Undefined
let n: null = null;
let u: undefined = undefined;

//Void
function noReturn(): void {
  // console.log("No Return");
}
let unusable: void = undefined;
// unusable = null; // 성공  `--strictNullChecks` 을 사용하지 않을때만

//Never
function errorNever(message: string): never {
  throw new Error(message);
}

//타입 단언 (Type assertions)
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

let someValue1: any = "this is a string";
let strLength1: number = (someValue1 as string).length;

//Object
//object는 원시 타입이 아닌 타입을 나타냅니다.
//예를 들어, number, string, boolean, bigint, symbol, null,
//또는 undefined 가 아닌 나머지를 의미합니다.
// declare function create(o: object | null): void;

// create({ prop: 0 }); // 성공
// create(null); // 성공

// create(42); // 오류
// create('string'); // 오류
// create(false); // 오류
// create(undefined); // 오류

type Person = {
  name: string;
  age: number;
  sex: string;
  weight: number;
  height: number;
};
let joy1: Person = {
  name: "joy",
  age: 29,
  sex: "Male",
  weight: 69,
  height: 1741,
};
type Abcd = "A" | "C" | "C" | "D";
type Student1 = Person & {
  score: Abcd;
};

let jay: Student1 = {
  name: "joy",
  age: 29,
  sex: "Male",
  weight: 69,
  height: 174,
  score: "A",
};
console.log(jay);

type GenericType<T> = T;
let generic1: GenericType<number> = 1;
let generic2: GenericType<string> = "1";
let generic3: GenericType<boolean> = true;
let generic4: GenericType<number[]> = [1];
