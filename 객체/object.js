function p(x, y, z) {
  console.log(x, y, z);
}
const user = {
  name: "홍길동",
  age: 30,
  email: "test@test.com",
  adress: "서울시 용산",
  food: ["김치찌개", "제육볶음"],

  payment: function () {
    console.log("결제가 완료 되었습니다");
  },
  deliveryStart: function () {
    this.payment();
    console.log("배달이 시작되었습니다");
    return console.log("배달끝");
  },
};
user.payment();

// console.log(user.name);
// console.log(user.age);
// console.log(user);
// console.log(user.food[0]);
// console.log(user.food[1]);
