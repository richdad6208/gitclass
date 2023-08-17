const chicken = document.querySelector("p");
const classChicken = document.querySelector(".content");

classChicken.innerHTML += "<h2>올해 최고의 치킨</h2>";

const all = document.querySelectorAll("p");
console.log(typeof all);
all.forEach((param) => {
  param.innerText += "양념치킨";
});

const alphabets = ["A", "B", "C"];
alphabets.forEach((val) => {
  classChicken.innerHTML += `<p>${val}</p>`;
});
