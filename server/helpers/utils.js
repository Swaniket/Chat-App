const generateResponseBody = (status, statusCode, message, data = {}) => {
  return {
    status,
    statusCode,
    message,
    data,
  };
};

module.exports = { generateResponseBody };
