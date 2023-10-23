const getHostName = () => process.env.HOST || '<api host url>';

module.exports = {
  getHostName,
};
