const fetch = require("node-fetch");

const errorResponse = (res, error) => {
  return res
    .status(error?.response?.status || 400)
    .json(error?.response?.data || error.message);
};

const requestMiddleware = (uri) => {
  return async (req, res) => {
    try {
      const queryKeys = Object.keys(req?.query || {});
      const query = queryKeys?.reduce((init, str, index) => {
        const p = `${index === 0 ? "?" : "&"}${str}=${req?.query?.[str]}`;
        init += p;

        return init;
      }, "");

      const response = await fetch(`${uri}${query}`);

      const data = await response.json();

      res.status(200).json(data);
    } catch (error) {
      errorResponse(res, error);
    }
  };
};

module.exports = {
  errorResponse,
  requestMiddleware,
};
