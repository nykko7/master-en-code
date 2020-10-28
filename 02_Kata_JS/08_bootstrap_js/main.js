var submit = document.getElementById("submit");
var form = document.getElementById("form");
var exampleInputEmail1 = document.getElementById("exampleInputEmail1");
var exampleInputPassword1 = document.getElementById("exampleInputPassword1");
var exampleLabelEmail1 = document.getElementById("exampleLabelEmail1");
var exampleLabelPassword1 = document.getElementById("exampleLabelPassword1");



exampleInputEmail1.addEventListener("focus", () => {
  exampleLabelEmail1.classList.add("focused");
});

exampleInputEmail1.addEventListener("focusout", () => {
  exampleLabelEmail1.classList.remove("focused");
});


form.addEventListener("submit", function (event){
  event.preventDefault();
  var email = exampleInputEmail1.value;
  var password = exampleInputPassword1.value;
  var check = exampleCheck1.checked;

  if(!check){
    console.log("Tienes que aceptar los terminos y condiciones");
  }

  if (password === '1234'){
    alert("Mejora la contraseña")
  }
  console.log("Usuario: " + email);
  console.log("Contraseña: " + password);
});


