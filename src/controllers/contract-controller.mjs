import Contract from "../models/contract-model.mjs";
import Player from "../models/player-model.mjs";

//Route Checking - Works
const getContracts = async (req, res, next) => {
  const result = await Contract.findAll();
  res.json({ contracts: result });
};

//Route Checking - Works
const getContractById = async (req, res, next) => {
  const id = req.params.id;
  const result = await Contract.findByPk(id);
  res.json({ contract: result });
};

//Route Checking - Works
const postContract = async (req, res, next) => {
  const result = await Contract.create({
    weeklySalary: req.body.weeklySalary,
    endingDate: req.body.endingDate,
    startingDate: req.body.startingDate,
    playerId: req.body.playerId,
  });
  res.json({ message: "Contract created", contract: result });
};

//Route Checking - Works
const updateContract = async (req, res, next) => {
  const result = await Contract.update(
    {
      weeklySalary: req.body.weeklySalary,
      endingDate: req.body.endingDate,
      startingDate: req.body.startingDate,
    },
    { where: { id: req.params.id } }
  );
  res.json({
    message: result[0] === 0 ? "Contract not updated" : "Contract updated",
    contract: result,
  });
};

//Route Checking - Works
const deleteContract = async (req, res, next) => {
  const id = req.params.id;
  const result = await Contract.destroy({ where: { id: id } });
  res.json({
    message: result === 0 ? "Contract not deleted" : "Contract deleted",
    result: result,
  });
};

export {
  getContracts,
  getContractById,
  postContract,
  updateContract,
  deleteContract,
};
