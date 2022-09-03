const { Register } = require('../models/register.model');

const getAllRegisters = async (req, res) => {
  try {
    const register = await Register.findAll();
    res.status(200).json({
      status: 'success',
      data: {
        register,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getRegistersById = async (req, res) => {
  try {
    const id = req.params.id;

    const register = await Register.findAll({ where: { id } });
    res.status(200).json({
      status: 'success',
      data: {
        register,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const createRegister = async (req, res) => {
  try {
    const { entraceTime } = req.body;

    const newRegister = await Register.create({
      entraceTime,
    });

    res.status(201).json({
      // enviamos una respuesta al cliente 'Front-End'   // lo hacemos en formato json
      status: 'success',
      data: { newRegister },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRegister = async (req, res) => {
  const { exitTime, status } = req.body;

  const id = req.params.id;

  const register = await Register.findOne({ where: { id } });

  if (!register) {
    return res.status(404).json({
      status: 'error',
      message: 'usuario no encontrado',
    });
  }

  await register.update({ exitTime, status });

  res.status(200).json({
    status: 'success',
    data: { register },
  });

  try {
  } catch (error) {
    console.log(error);
  }
};

const deleteRegister = async (req, res) => {
  try {
    const id = req.params.id;

    const register = await Register.findOne({ where: { id } });

    console.log(id);

    if (!register) {
      return res.status(404).json({
        status: 'error',
        message: 'post no encontrado',
      });
    }
    await register.update({ status: 'Cancelled' });

    res.status(200).json({
      status: 'cancelled register',
      data: { register },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRegisters,
  getRegistersById,
  createRegister,
  updateRegister,
  deleteRegister,
};
