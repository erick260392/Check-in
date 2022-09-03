const { app } = require('./app');

// traemos la conexion con la base de datos
const { db } = require('./utils/database.util');

const startServer = async () => {
  try {
    //Conectamos con la base de Datos
    await db.authenticate();
    await db.sync();
    console.log('autenticated');
    // set server to listen

    const PORT = 4000;

    app.listen(PORT, () => {
      console.log('Express is running ');
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
