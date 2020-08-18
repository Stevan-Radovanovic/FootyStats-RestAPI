import Admin from "../models/admin-model.mjs";
import Jwt from "jsonwebtoken";
import Bcrypt from "bcrypt";

const getAdmins = async (req, res, next) => {
  try {
    const result = await Admin.findAll();
    res.json({ admins: result });
  } catch (err) {
    next(new Error(err));
  }
};

const getAdminById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Admin.findByPk(id);
    res.json({ admin: result });
  } catch (err) {
    next(new Error(err));
  }
};

const getAdminByUserName = async (req, res, next) => {
  try {
    const name = req.params.name;
    const result = await Admin.findAll({ where: { userName: name } });
    res.json({ admin: result });
  } catch (err) {
    next(new Error(err));
  }
};

const postAdmin = async (req, res, next) => {
  try {
    const hash = await Bcrypt.hash(req.body.password, 10);
    const result = await Admin.create({
      userName: req.body.userName,
      password: hash,
    });
    res.json({ message: "New admin created", admin: result });
  } catch (err) {
    next(new Error(err));
  }
};

const updateAdminById = async (req, res, next) => {
  try {
    const result = await Admin.update(
      {
        userName: req.body.userName,
        password: req.body.password,
      },
      { where: { id: req.params.id } }
    );
    res.json({
      message: result[0] === 0 ? "Admin not updated" : "Admin updated",
      admin: result,
    });
  } catch (err) {
    next(new Error(err));
  }
};

const updateAdminByUserName = async (req, res, next) => {
  try {
    const result = await Admin.update(
      {
        userName: req.body.userName,
        password: req.body.password,
      },
      { where: { userName: req.params.name } }
    );
    res.json({
      message: result[0] === 0 ? "Admin not updated" : "Admin updated",
      admin: result,
    });
  } catch (err) {
    next(new Error(err));
  }
};

const deleteAdminById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Admin.destroy({ where: { id: id } });
    res.json({
      message: result === 0 ? "Admin not deleted" : "Admin deleted",
      result: result,
    });
  } catch (err) {
    next(new Error(err));
  }
};

const deleteAdminByUserName = async (req, res, next) => {
  try {
    const name = req.params.name;
    const result = await Admin.destroy({ where: { userName: name } });
    res.json({
      message: result === 0 ? "Admin not deleted" : "Admin deleted",
      result: result,
    });
  } catch (err) {
    next(new Error(err));
  }
};

const logIn = async (req, res, next) => {
  try {
    const name = req.body.name;
    const fetchedUser = await Admin.findAll({ where: { userName: name } });

    if (!fetchedUser[0]) {
      throw new Error("User not found");
    }
    const compareResult = await Bcrypt.compare(
      req.body.password,
      fetchedUser[0].dataValues.password
    );
    if (!compareResult) {
      throw new Error("Invalid User");
    }
    const token = Jwt.sign(
      {
        userName: fetchedUser[0].dataValues.userName,
        id: fetchedUser[0].dataValues.id,
      },
      "secret",
      {
        expiresIn: "1h",
      }
    );
    res.json({ token: token });
  } catch (err) {
    next(new Error(err));
  }
};

export {
  getAdmins,
  getAdminById,
  postAdmin,
  deleteAdminById,
  deleteAdminByUserName,
  getAdminByUserName,
  updateAdminByUserName,
  updateAdminById,
  logIn,
};
