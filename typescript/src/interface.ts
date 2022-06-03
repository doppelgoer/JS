interface Student {
  name: string;
  isMale: boolean;
  middleScore: number;
  finalScore: number;
}

//왜 안되지?
function studentData(_name: string, _isMale: boolean, _middleScore: number, _finalScore: number): Student {
  return {
    name: _name,
    isMale: _isMale,
    middleScore: _middleScore,
    finalScore: _finalScore,
  };
}
let 장1: Student = studentData('장1', true, 100, 100);
console.log('장1 : ', 장1);
let 장2 = studentData('장2', null!, 100, 100);
console.log('장2 : ', 장2);
//
// let 장3 = studentData('장3', true, 100, 100, 100);

interface Student1 {
  name: string;
  isMale: boolean;
  middleScore: number;
  finalScore: number;
}

function printStudentName(_student: Student1) {
  // console.log(_student.name);
  return _student.name;
}
1;

let myObj = { name: '장1', isMale: true, middleScore: 100, finalScore: 100, englishScore: 0 };
printStudentName(myObj);

class JoY {
  name: string;
  isMale: boolean;
  middleScore: number;
  finalScore: number;
  constructor(name: string, isMale: boolean, middleScore: number, finalScore: number) {
    this.name = name;
    this.isMale = isMale;
    this.middleScore = middleScore;
    this.finalScore = finalScore;
  }
}
