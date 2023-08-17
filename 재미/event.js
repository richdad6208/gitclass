const box = document.querySelector(".box");
let crl = 0;
box.addEventListener("mousemove", (e) => {
  console.log(e);
  console.log(e.offsetX, e.offsetY);
  crl++;
  console.log(crl);
  box.style.background = `linear-gradient(${crl}deg, rgb(34,32,34), rgb(200,120,50))`;
});
