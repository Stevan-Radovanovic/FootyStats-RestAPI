import Contract from "../models/contract-model.mjs";
import Player from "../models/player-model.mjs";

//Route Checking - Works
const getContracts = async (req, res, next) => {
  try {
    const result = await Contract.findAll();
    res.json({ contracts: result });
  } catch (err) {
    next(new Error(err));
  }
};

//Route Checking - Works
const getContractById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Contract.findByPk(id);
    res.json({ contract: result });
  } catch (err) {
    next(new Error(err));
  }
};

//Route Checking - Works
const getActiveContract = async (req, res, next) => {
  try {
    const id = req.params.id;
    const active = await Contract.max("startingDate");
    const result = await Contract.findAll({
      where: { startingDate: active, playerId: id },
    });
    res.json({ contract: result });
  } catch (err) {
    next(new Error(err));
  }
};

//Route Checking - Works
const postContract = async (req, res, next) => {
  try {
    const result = await Contract.create({
      weeklySalary: req.body.weeklySalary,
      endingDate: req.body.endingDate,
      startingDate: req.body.startingDate,
      playerId: req.body.playerId,
    });
    res.json({ message: "Contract created", contract: result });
  } catch (err) {
    next(new Error(err));
  }
};

//Route Checking - Works
const updateContract = async (req, res, next) => {
  try {
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
  } catch (err) {
    next(new Error(err));
  }
};

//Route Checking - Works
const deleteContract = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Contract.destroy({ where: { id: id } });
    res.json({
      message: result === 0 ? "Contract not deleted" : "Contract deleted",
      result: result,
    });
  } catch (err) {
    next(new Error(err));
  }
};

const getContractsByPlayerId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Contract.findAll({ where: { playerId: id } });
    res.json({ contract: result });
  } catch (err) {
    next(new Error(err));
  }
};

export {
  getContracts,
  getContractById,
  getContractsByPlayerId,
  getActiveContract,
  postContract,
  updateContract,
  deleteContract,
};
