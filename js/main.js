// Declaración de variables y constantes
const INTERES = 0.25;
let cuotasDisponibles = [3, 6, 12];

// Función para ingresar datos del usuario
function solicitarDatos() {
  let nombre = prompt("¡Bienvenido al Simulador de Préstamos!\n\nPor favor, ingresa tu nombre:");
  return nombre;
}

// Función para calcular total a pagar
function calcularPrestamo(monto, cuotas) {
  let interesTotal = monto * INTERES;
  let total = monto + interesTotal;
  let valorCuota = total / cuotas;

  return {
    total,
    valorCuota
  };
}

// Función para mostrar resultados
function mostrarResultados(nombre, monto, cuotas, total, cuotaMensual) {
  console.log(`Usuario: ${nombre}`);
  console.log(`Monto solicitado: $${monto}`);
  console.log(`Cuotas: ${cuotas}`);
  console.log(`Total a pagar con interés: $${total}`);
  console.log(`Valor de cada cuota: $${cuotaMensual.toFixed(2)}`);

  alert(`Gracias, ${nombre}.\n\nMonto solicitado: $${monto}\nTotal a pagar: $${total}\nCuotas: ${cuotas} x $${cuotaMensual.toFixed(2)}`);
}

// Función principal que controla el flujo del simulador
function iniciarSimulador() {
  let usuario = solicitarDatos();

  let monto = parseFloat(prompt("¿Cuánto dinero deseas solicitar?"));
  while (isNaN(monto) || monto <= 0) {
    monto = parseFloat(prompt("Por favor, ingresa un monto válido mayor a 0:"));
  }

  let cuotas = parseInt(prompt("¿En cuántas cuotas deseas pagar? (3, 6 o 12)"));
  while (!cuotasDisponibles.includes(cuotas)) {
    cuotas = parseInt(prompt("Cantidad de cuotas no válida.\nPor favor, elige entre 3, 6 o 12 cuotas:"));
  }

  let resultado = calcularPrestamo(monto, cuotas);
  mostrarResultados(usuario, monto, cuotas, resultado.total, resultado.valorCuota);

  let repetir = confirm("¿Deseas hacer otra simulación?");
  if (repetir) {
    iniciarSimulador();
  } else {
    alert("¡Gracias por usar el simulador!");
  }
}

// Iniciar simulador
iniciarSimulador();
