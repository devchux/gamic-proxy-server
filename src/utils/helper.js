const errorResponse = (res, error) => {
  return res
    .status(error?.response?.status || 400)
    .json(error?.response?.data || error.message);
};

module.exports = {
    errorResponse
}
