const desc = document.querySelector(".descripcion");
let val = document.querySelector(".valor");
const entrar = document.querySelector(".entrar");
const sacar = document.querySelector(".sacar");
const ul = document.querySelector("ul");
const ingresar = document.getElementById("ingresar");
const egresar = document.getElementById("egresar");
const saldo = document.getElementById("saldos");
let sum1 = 0;
let sum2 = 0;

function cargar() {
  const li = document.createElement("li");
  const p = document.createElement("p");
  const p2 = document.createElement("p");

  p.textContent = desc.value;
  p2.textContent = val.value;

  li.appendChild(p);
  li.appendChild(p2);
  li.appendChild(deleteBoton());
  ul.appendChild(li);
  p2.className = "p2";
}

entrar.addEventListener("click", (e) => {
  e.preventDefault();
  if (desc.value == "") {
    alert("Ingrese una descripcion para continuar");
    desc.focus();
  } else if (val.value == "") {
    alert("Ingrese un valor para continuar");
    val.focus();
  } else {
    cargar();

    sum1 = parseInt(sum1) + parseInt(val.value);
    ingresar.innerHTML = "Ingreso: " + "$" + sum1;
    saldo.innerHTML = "Saldo: $" + (parseInt(sum1) - parseInt(sum2));
    vaciarInput();
  }
});

sacar.addEventListener("click", (e) => {
  e.preventDefault();

  if (desc.value == "") {
    alert("Ingrese una descripcion para continuar");
    desc.focus();
  } else if (val.value == "") {
    alert("Ingrese un valor para continuar");
    val.focus();
  } else {
    cargar();
    sum2 = parseInt(sum2) + parseInt(val.value);
    saldo.innerHTML = "Saldo: " + "$" + (parseInt(sum1) - parseInt(sum2));
    egresar.innerHTML = "Egreso: " + "$" + sum2;
    vaciarInput();
  }
});

function deleteBoton() {
  const deletebtn = document.createElement("button");
  deletebtn.textContent = "X";
  deletebtn.className = "btn-delete";
  deletebtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    console.log(borrar);
  });
  return deletebtn;
}

function vaciarInput() {
  desc.value = "";
  val.value = "";
}
