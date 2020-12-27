const socket = io("http://localhost:3000");

// DOM
const message = document.querySelector(".message-box");
const formBox = document.querySelector(".form-box");
const inputCardId = document.querySelector(".input_card_id");
const inputName = document.querySelector(".input_name");

let storeUser = {
    name: '',
    date: '',
    message: ''
}
let id = "";

function socketOn(listen) {
  socket.on(listen, function (data) {
    const div = createElementDiv();

    storeUser = {...storeUser, ...data}
    insertTag(div, createElementParagraph(storeUser.message));
    insertTag(div, createElementParagraph(storeUser.name));
    insertTag(div, createElementParagraph(storeUser.date));

    message.appendChild(div);
  });
}

function socketEmit() {
  // something
}

function submit() {
  formBox.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = inputName.value;
    console.log(name, id);
    const res = await fetch("http://localhost:3000/api/admin/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        id: id,
      }),
    });

    id = "";
    inputName.value = "";

    const data = await res.json();
    console.log(data);
  });
}

function createElementParagraph(content) {
  const p = document.createElement("p");
  p.textContent = content;
  return p;
}

function createElementDiv() {
  const div = document.createElement("div");
  return div;
}

function insertTag(tagParent, tagChild) {
  tagParent.appendChild(tagChild);
}
