const addForm = document.querySelector(".add");
const list = document.querySelector(".memos");
const alertmsg = document.getElementById("alertmsg");
const search = document.querySelector(".search");
const saveMemo = (memoText) => {
  const html = `<li
  class="list-group-item d-flex justify-content-between align-items-center"
>
  <span>${memoText}</span>
  <i class="far fa-trash-alt delete fa-spin"></i>
</li>`;
  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const memo = addForm.add.value;
  addForm.add.value = "";
  if (memo.length) {
    alertmsg.classList.add("hidden");
    saveMemo(memo);
  } else {
    // console.log("글 내용을 작성하세요");
    alertmsg.classList.remove("hidden");
  }
  //   console.log("글을 남겼습니다");
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filterMemo = (memo) => {
  Array.from(list.children)
    .filter((memotext) => !memotext.textContent.includes(memo))
    .forEach((memotext) => memotext.classList.add("filtered"));

  Array.from(list.children)
    .filter((memotext) => memotext.textContent.includes(memo))
    .forEach((memotext) => memotext.classList.remove("filtered"));
};

search.addEventListener("keyup", (e) => {
  const searchText = e.target.value;
  //   console.log(searchText);
  filterMemo(searchText);
});
