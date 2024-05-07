const { buscarUser } = require('../users.js');

describe('Testing buscarUser function', () => {
  it('should console.log user data for a valid user ID', async () => {
    await buscarUser(1);
    //Esperamos que nos de todo el resultado del array del usuario 1
    expect({
      id: 1,
      username: "hpLover4",
      email: "sirious90@gmail.com",
      password: "hArrydotCom",
    });
  });
  it('should console.error an error message for an invalid user ID', async () => {
    await buscarUser(45);
    //Esperamos que nos marque el erro cuando el dato del usario no exista
    expect(Error("User does not exist, please try again"));
  });
});