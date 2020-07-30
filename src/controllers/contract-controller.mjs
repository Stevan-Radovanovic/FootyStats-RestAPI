import Contract from "../models/contract-model.mjs";
import Player from "../models/player-model.mjs";
import Bonus from "../models/bonus-model.mjs";

const getContracts = async (req, res, next) => {
  try {
    const result = await Contract.findAll();
    res.json({ contracts: result });
  } catch (err) {
    next(new Error(err));
  }
};

const getContractsWithPlayer = async (req, res, next) => {
  try {
    const result = await Contract.findAll({ include: Player });
    res.json({ contracts: result });
  } catch (err) {
    next(new Error(err));
  }
};

const getContractsWithBonuses = async (req, res, next) => {
  try {
    const result = await Contract.findAll({ include: Bonus });
    res.json({ contracts: result });
  } catch (err) {
    next(new Error(err));
  }
};

const getContractById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Contract.findByPk(id);
    res.json({ contract: result });
  } catch (err) {
    next(new Error(err));
  }
};

const getContractByIdWithPlayer = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Contract.findByPk(id, { include: Player });
    res.json({ contract: result });
  } catch (err) {
    next(new Error(err));
  }
};

const getContractByIdWithBonuses = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Contract.findByPk(id, { include: Bonus });
    res.json({ contract: result });
  } catch (err) {
    next(new Error(err));
  }
};

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

const getActiveContractWithPlayer = async (req, res, next) => {
  try {
    const id = req.params.id;
    const active = await Contract.max("startingDate");
    const result = await Contract.findAll({
      where: { startingDate: active, playerId: id },
      include: Player,
    });
    res.json({ contract: result });
  } catch (err) {
    next(new Error(err));
  }
};

const getActiveContractWithBonuses = async (req, res, next) => {
  try {
    const id = req.params.id;
    const active = await Contract.max("startingDate");
    const result = await Contract.findAll({
      where: { startingDate: active, playerId: id },
      include: Bonus,
    });
    res.json({ contract: result });
  } catch (err) {
    next(new Error(err));
  }
};

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
  getContractsWithPlayer,
  getContractById,
  getContractByIdWithPlayer,
  getContractsByPlayerId,
  getActiveContract,
  getActiveContractWithPlayer,
  postContract,
  updateContract,
  deleteContract,
  getContractsWithBonuses,
  getActiveContractWithBonuses,
  getContractByIdWithBonuses,
};
