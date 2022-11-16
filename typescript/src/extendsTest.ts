class ExtendsTest {
  constructor(public test1: number, public test2: string) {}
}

let thisIs = new ExtendsTest(1, 'Joy');
console.log(thisIs);

interface ThisIsTest<E extends ExtendsTest> {
  number1: E;
  number2: number;
}

// let thisIsEExtend :ThisIsTest<>=

// 클래스 Model
class Model {
  constructor(public options: any) {}
}

// 팩토리 함수
function create<T, U>(C: { new (A: any): T }, options: U): T {
  return new C(options);
}
// create() 팩토리 함수에 Model, string[] 멀티 타입 설정
let test = create<Model, string[]>(Model, ['class type']);
console.log(test);
