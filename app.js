let inputDom = document.querySelector("#plan");
let ekleButonDom = document.querySelector("#ekle_buton");
let ulDom = document.querySelector("#list");
let alertDom = document.querySelector("#alert");
let ekleDom = document.querySelector("#ekle");
let closeButtonDom = document.querySelector("#closeButton");
let liDom = document.querySelector("#list-item");

//listeye eleman eklemek
function ekleButonu(e) {
  if (inputDom.value.trim() == "") {
    alertDom.innerHTML = `<div class="alert alert-danger" role="alert">
    Listeye boş ekleme yapamazsınız!
    </div>`;
  } else {
    let newLi = document.createElement("li");
    newLi.innerHTML = `<span>${inputDom.value}</span><button
    type="button"
    class="btn-close"
    data-bs-dismiss="alert"
    id="${inputDom.value}"
  ></button>`;
    ulDom.append(newLi);
    newLi.classList.add("list-group-item");
    newLi.setAttribute("id", "list-item");
    alertDom.innerHTML = `<div class="alert alert-success" role="alert">
    Listeye yeni eleman eklendi.
    </div>`;
    saveLocal(inputDom.value);
  }
  document.getElementById("plan").value = "";
  initiliaze();
}

function initiliaze() {
  var allSubjectName = document.querySelectorAll(".list-group-item");
  for (var index = 0; index < allSubjectName.length; index++) {
    allSubjectName[index].addEventListener("click", function () {
      this.classList.toggle("text-dec");
    });
    allSubjectName[index]
      .querySelector("button")
      .addEventListener("click", function () {
        let answer = window.confirm("kaldırmak istediğinizden emin misiniz?");
        if (answer) {
          this.closest(".list-group-item").remove();
        }
      });
  }
}

document.addEventListener("load", initiliaze());

function saveLocal(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
