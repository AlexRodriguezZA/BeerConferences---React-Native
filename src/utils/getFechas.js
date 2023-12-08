
//Esta función la hago debido a que firebase me trae los datos en formato de segundos
//tanto la fecha, hora de inicio y hora de fin de la conferencia
//Con esta funcion lo que hacemos es tranformar en hora y fecha los segundos que me trae firebase.
export const getFechas = (hora_inicio, hora_fin) => {
  const date1 = new Date(hora_inicio.seconds * 1000);
  const date2 = new Date(hora_fin.seconds * 1000);

  const año = date1.getFullYear();
  const mes = date1.getMonth() + 1;
  const día = date1.getDate();
  const horaInicio = date1.getHours();
  const minutosInicio = date1.getMinutes();
  const horaFin = date2.getHours();
  const minutosFin = date2.getMinutes();

  const fecha = `${año}/${mes}/${día}`
  const inicio = `${horaInicio}:${minutosInicio}`
  const fin = `${horaFin}:${minutosFin}`
  return {
    fecha, inicio, fin
  }
};
