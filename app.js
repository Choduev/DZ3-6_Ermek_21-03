// =======================1==============================
const btn = document.querySelector(".btn");
const block = document.querySelector(".block");
const prev = document.querySelector(".btn-prev");

let num = 1;
function next() {
  fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
    .then((response) => response.json())
    .then((todoItem) => {
      console.log(todoItem);
      block.innerHTML = `
                <div class="card">
                    <h3>${todoItem.title}</h3>
                    <h3>${todoItem.completed}</h3>
                    <h3>${todoItem.id}</h3>
                </div>
            `;
    });
}
next();
btn.onclick = () => {
  if (num >= 200) num = 0;
  num++;
  next();
};
prev.onclick = () => {
  if (num <= 1) num = 200;
  num--;
  next();
};

// =======================2===========================

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((lol) => console.table(lol));
