const express = require('express');

const registerRouter = express.Router();

const {
  getAllRegisters,
  getRegistersById,
  createRegister,
  updateRegister,
  deleteRegister,
} = require('../controllers/register.controller');

registerRouter.get('/', getAllRegisters);

registerRouter.get('/:id', getRegistersById);

registerRouter.post('/', createRegister);

registerRouter.patch('/:id', updateRegister);

registerRouter.delete('/:id', deleteRegister);

module.exports = { registerRouter };
