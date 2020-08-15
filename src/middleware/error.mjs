const errorMiddleware = (err, req, res, next) => {
  console.log("An error has been thrown: " + err);
  res.json({ error: err.message });
};

export { errorMiddleware };
