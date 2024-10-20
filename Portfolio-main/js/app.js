const botones = document.querySelectorAll('.boton');

function filter(tipo) {
  // Seleccionamos todas las tarjetas
  const tarjetas = document.querySelectorAll('.filterDiv');

  // Si el tipo es 'all-btn', mostramos todas las tarjetas
  if (tipo === 'all-btn') {
      tarjetas.forEach(tarjeta => {
          tarjeta.style.display = 'block'; // Muestra todas
      });
  } else {
      // Si no, ocultamos todas primero
      tarjetas.forEach(tarjeta => {
          tarjeta.style.display = 'none'; // Oculta todas
      });

      
  }

  if (tipo === 'java') {
    const tarjetasFiltradas = document.querySelectorAll('.filterDiv.java');
    tarjetasFiltradas.forEach(tarjeta => {
        tarjeta.style.display = 'block';
    });
  } else if (tipo === 'html') {
    const tarjetasFiltradas = document.querySelectorAll('.filterDiv.html');
    tarjetasFiltradas.forEach(tarjeta => {
        tarjeta.style.display = 'block'; 
    });
  } else if (tipo === 'css') {
    const tarjetasFiltradas = document.querySelectorAll('.filterDiv.css');
    tarjetasFiltradas.forEach(tarjeta => {
        tarjeta.style.display = 'block'; 
    });
  } else {
    const tarjetasFiltradas = document.querySelectorAll(`.filterDiv.${tipo}`);
        tarjetasFiltradas.forEach(tarjeta => {
            tarjeta.style.display = 'block'; // Mostrar solo las que coinciden
        });
  }
}

botones.forEach(boton => {
  boton.addEventListener('click', (e) => {
    const tipo = e.target.id; // Obtener el id del botón
    filter(tipo); // Llamar a la función de filtro
  });
});
