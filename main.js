// Función para mostrar la alerta
function mostrarAlerta() {
  let alerta = document.querySelector(".alerta-overlay");
  alerta.style.display = "flex";
  setTimeout(() => {
    alerta.style.opacity = 1;
  }, 10);
}

// Función para cerrar la alerta
function cerrarAlerta() {
  let alerta = document.querySelector(".alerta-overlay");
  alerta.style.opacity = 0;
  setTimeout(() => {
    alerta.style.display = "none";
  }, 500);
}
document.getElementById("hot").addEventListener("click", mostrarAlerta);
document.getElementById("dep").addEventListener("click", mostrarAlerta);
document.getElementById("alq").addEventListener("click", mostrarAlerta);
document.getElementById("act").addEventListener("click", mostrarAlerta);
document.getElementById("cerrarAlerta").addEventListener("click", cerrarAlerta);
document.getElementById("adquirir").addEventListener("click", cerrarAlerta);

// Boton Oscuro / Claro

let boton = document.getElementById("boton-oc");

boton.addEventListener("click", () => {
  const body = document.body;

  if (
    body.style.backgroundColor === "rgb(1, 22, 30)" ||
    body.style.backgroundColor === "#e8e8e8"
  ) {
    console.log("Cambiar a oscuro");
    body.style.backgroundColor = "#e8e8e8";
  } else {
    console.log("Cambiar a claro");
    body.style.backgroundColor = "#01161e";
  }
});

const abrirWhatsapp = () => {
  let cuadro = document.getElementById("cuadro");
  let triangulo = document.getElementById("triangulo-w");

  if (cuadro.style.opacity == 0 && triangulo.style.opacity == 0) {
    cuadro.style.opacity = 1;
    triangulo.style.opacity = 1;
  } else {
    cuadro.style.opacity = 0;
    triangulo.style.opacity = 0;
  }
};

document
  .getElementById("click-boton-w")
  .addEventListener("click", abrirWhatsapp);
