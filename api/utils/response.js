const successResponse = (res, data) => {
  return res.status(200).send(data);
};

const errorResponse = (res, error) => {
  return res.status(500).send(error);
};

const resourceCreated = (res, data) => {
  return res.status(201).send(data);
};

const parametersMissing = (res, data) => {
  return res.status(400).send(data);
};

module.exports = {
  successResponse,
  errorResponse,
  resourceCreated,
  parametersMissing,
};
