import Bonus from "../models/bonus-model.mjs";

const getBonuses = async (req, res, next) => {
  const result = await Bonus.findAll();
  res.json({ bonuses: result });
};

const getBonusById = async (req, res, next) => {
  const id = req.params.id;
  const result = await Bonus.findByPk(id);
  res.json({ bonus: result });
};

const postBonus = async (req, res, next) => {
  const result = await Bonus.create({
    description: req.body.description,
    amount: req.body.amount,
    contractId: req.body.contractId,
  });
  res.json({ message: "New bonus created", bonus: result });
};

const updateBonus = async (req, res, next) => {
  const result = await Bonus.update(
    {
      description: req.body.description,
      amount: req.body.amount,
    },
    { where: { id: req.params.id } }
  );
  res.json({
    message: result[0] === 0 ? "Bonus not updated" : "Bonus updated",
    contract: result,
  });
};

const deleteBonus = async (req, res, next) => {
  const id = req.params.id;
  const result = await Bonus.destroy({ where: { id: id } });
  res.json({
    message: result === 0 ? "Bonus not deleted" : "Bonus deleted",
    result: result,
  });
};

export { getBonuses, getBonusById, postBonus, updateBonus, deleteBonus };
