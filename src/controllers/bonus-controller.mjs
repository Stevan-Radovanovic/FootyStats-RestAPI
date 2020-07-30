import Bonus from "../models/bonus-model.mjs";

const getBonuses = async (req, res, next) => {
  try {
    const result = await Bonus.findAll();
    res.json({ bonuses: result });
  } catch (err) {
    next(new Error(err));
  }
};

const getBonusById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Bonus.findByPk(id);
    res.json({ bonus: result });
  } catch (err) {
    next(new Error(err));
  }
};

const postBonus = async (req, res, next) => {
  try {
    const result = await Bonus.create({
      description: req.body.description,
      amount: req.body.amount,
      contractId: req.body.contractId,
    });
    res.json({ message: "New bonus created", bonus: result });
  } catch (err) {
    next(new Error(err));
  }
};

const updateBonus = async (req, res, next) => {
  try {
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
  } catch (err) {
    next(new Error(err));
  }
};

const deleteBonus = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Bonus.destroy({ where: { id: id } });
    res.json({
      message: result === 0 ? "Bonus not deleted" : "Bonus deleted",
      result: result,
    });
  } catch (err) {
    next(new Error(err));
  }
};

export { getBonuses, getBonusById, postBonus, updateBonus, deleteBonus };
