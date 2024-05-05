import CustomError from "./error";
const errortest = {
  data: {
    message: "Validation failed",
    detail: '"planId" with value "[object Object]" fails to match the valid mongo id pattern',
  },
  status: 400,
};
const test = new CustomError(100100, errortest);
console.log(test);
