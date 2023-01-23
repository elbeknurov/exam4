const template = document.querySelector("#template");
const elDiv = document.querySelector(".book_posts");
const elSearch = document.querySelector(".header_input");
const log = localStorage.getItem("log");
const elLogout = document.querySelector(".header__btn");
let book = [];
fetch(`https://63bbe06532d17a50909b165d.mockapi.io/books`)
  .then((res) => res.json())
  .then((data) => {
    book = data;
    console.log(book);
    fetchData(book);
    searchBookHandler(book);
  });
function fetchData(book) {
  elDiv.innerHTML = "";
  const fragment = document.createDocumentFragment();
  book.forEach((book) => {
    const appealTemplate = template.content.cloneNode(true);

    const img = appealTemplate.querySelector(`.img`);
    const title = appealTemplate.querySelector(`.book_title`);
    const author = appealTemplate.querySelector(`.book_writer`);
    const year = appealTemplate.querySelector(`.book_year`);
    img.src = book.img;
    title.textContent = book.name;
    author.textContent = book.Title;
    year.textContent = book.year;
    fragment.append(appealTemplate);
  });
  elDiv.append(fragment);
}

function searchBookHandler(data) {
  elSearch.addEventListener("input", () => {
    const value = elSearch.value;
    const elRegx = new RegExp(value, "gi");
    const filter = data.filter((item) => item.name.match(elRegx));
    fetchData(filter);
  });
}

if (log) {
  elLogout.textContent = "Logout";
} else {
  elLogout.textContent = "Login";
}

elLogout.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "../pages/login.html";
});

elLogout.addEventListener("click", (e) => {
  e.preventDefault();
  if (elLogout.textContent == "Logout") {
    localStorage.removeItem("log");
    window.location.reload();
    registers.textContent = "Login";
  }
});
