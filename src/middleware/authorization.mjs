import Jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    Jwt.verify(token, "secret");
    next();
  } catch (err) {
    next(new Error(err));
  }
};

export { authMiddleware };
