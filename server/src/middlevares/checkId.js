function checkId(req, res, next) {
  const { id } = req.params;
  if (Number.isNaN(+id)) {
    return res.status(400).send(`id должен быть числом, пришло ${id}`);
  }
  next();
}

function checkParam(paramName) {
  return (req, res, next) => {
    console.log(req.params[paramName]);
    if (Number.isNaN(+req.params[paramName])) {
      return res
        .status(400)
        .send(`id должен быть числом, пришло ${req.params[paramName]}`);
    }
    next();
  };
}

module.exports = checkParam;
