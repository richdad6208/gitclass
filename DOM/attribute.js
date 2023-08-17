const link = document.getElementById("naver");
// link.setAttribute("href", "https://www.google.com");
// link.innerHTML = "역시 검색은 구글";

const coupang = document.querySelector("p");
let fs = 10;
const changeFont = () => {
  console.log("hi");
  fs++;
  coupang.setAttribute("style", `color:blue;font-size: ${fs}px;`);
};
const error = document.querySelector(".error");
