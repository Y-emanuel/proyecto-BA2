// // modal
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
});

// Boton Oscuro / Claro

const boton = document.getElementById('boton-oc');

boton.addEventListener('change', () => {
  const body = document.body;

  if (body.style.backgroundColor === 'rgb(1, 22, 30)' || body.style.backgroundColor === '#e8e8e8') {
    console.log('Cambiar a oscuro');
    body.style.backgroundColor = '#e8e8e8';
  } else {
    console.log('Cambiar a claro');
    body.style.backgroundColor = '#01161e';
  }
});

