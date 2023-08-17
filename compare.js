(function () {
  //////////////////////////////////////
  function p(x = "", y = "", z = "") {
    document.writeln(x, y, z);
  }
  let score = 100;

  if (score === 100) {
    p("축하합니다 A 입니다.");
  } else if (score === 80) {
    p("아쉽네요 B 입니다");
  } else {
    p("분발하세요");
  }

  switch (score) {
    case 100:
      p("야호");
      break;
    case 80:
      p("야야호");
      break;
    case 60:
      p("야야야호");
      break;
    default:
  }

  ////////////////////////////////
})();
