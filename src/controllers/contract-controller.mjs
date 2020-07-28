import Contract from "../models/contract-model.mjs";

//Route Checking - Works
const getContracts = async (req, res, next) => {
  const result = await Contract.findAll();
  res.json({ contracts: result });
};

const getContractById = async (req, res, next) => {
  const id = req.params.id;
  const result = await Contract.findByPk(id);
  console.log(result);
};

const createContract = async (req, res, next) => {
  const result = await Contract.create({
    weeklySalary: req.body.number,
    endingDate: req.body.position,
    startingDate: req.body.dateOfBirth,
  });
  console.log(result);
};

const updateContract = async (req, res, next) => {
  const result = await Contract.update(
    {
      weeklySalary: req.body.number,
      endingDate: req.body.position,
      startingDate: req.body.dateOfBirth,
    },
    { where: { id: req.params.id } }
  );
  console.log(result);
};

const deleteContract = async (req, res, next) => {
  const id = req.params.id;
  const result = await Contract.destroy({ where: { id: id } });
  console.log(result);
};

export {
  getContracts,
  getContractById,
  createContract,
  updateContract,
  deleteContract,
};
