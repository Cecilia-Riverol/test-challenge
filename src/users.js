// Importamos la infromación de la pàgina de datos
const users = require("./data");

// Simulación como si fuese una API usando el método de promesa
const getUser = (id) => {
  return new Promise((resolve, reject) => {
    //Dentro del array User buscamos el ID y nos cercioramos de que sean identicos
      const user = users.find((user) => user.id === id);

      //Si el id del usuario es igual a lo que tenemos en la base de datos vamos a resolver, sino vamos a colocar que no existe y que intente de nuevo.
      if (user) {
        resolve(user);
      } else {
        reject(new Error("User does not exist, please try again"));
      }
  });
};

//Función para encontrar un User basado en su ID. - La función arroja toda la información del User
const buscarUser = async (id) => {
  try {
    const user = await getUser(id);
    console.log(user); //Imprimimos la información del usuario
  } catch (err) {
    console.error(err); //Mnadamos el error
  }
};

// Pruebas para saber que está bien
buscarUser(1); // FDebe regresar la información de hpLover
buscarUser(99); // Debe regresar el mensaje de usuario inexistente

module.exports = { buscarUser};