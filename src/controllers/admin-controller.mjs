import Admin from "../models/admin-model.mjs";

const getAdmins = async (req, res, next) => {
  const result = await Admin.findAll();
  res.json({ admins: result });
};

const getAdminById = async (req, res, next) => {
  const id = req.params.id;
  const result = await Admin.findByPk(id);
  res.json({ admin: result });
};

const getAdminByUserName = async (req, res, next) => {
  const name = req.params.name;
  const result = await Admin.findAll({ where: { userName: name } });
  res.json({ admin: result });
};

const postAdmin = async (req, res, next) => {
  const result = await Admin.create({
    userName: req.body.userName,
    password: req.body.password,
  });
  res.json({ message: "New admin created", admin: result });
};

const deleteAdmin = async (req, res, next) => {
  const id = req.params.id;
  const result = await Admin.destroy({ where: { id: id } });
  res.json({
    message: result === 0 ? "Admin not deleted" : "Admin deleted",
    result: result,
  });
};

export { getAdmins, getAdminById, postAdmin, deleteAdmin, getAdminByUserName };
